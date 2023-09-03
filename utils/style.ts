interface ApplyStylesByDataAttribute {
  (
    /**
     * data attribute와 value의 쌍
     * @example
     * 'type=button'
     */
    attributeWithValue: `${string}=${string}`,
    options?: string | string[],
  ): string;
  (key: string, options?: Record<string, string>): string;
}

/**
 * tailwindcss 를 사용할 때 특정 data attribute 에 스타일을 적용할 수 있도록 도와주는 유틸 함수
 *
 * @param attribute
 * @param options the styles to apply to the data attribute or an object of key value pairs
 * @returns the tailwindcss plugin string
 */
export const applyStylesByDataAttribute: ApplyStylesByDataAttribute = (attribute, options = []) => {
  if (typeof options === 'string') {
    return `[data-${attribute}]:${options}`;
  }

  if (Array.isArray(options)) {
    return options.reduce((acc, style) => `${acc} [data-${attribute}]:${style}`, '');
  }

  return Object.entries(options).reduce(
    (acc, [key, value]) => `${acc} [data-${attribute}=${key}]:${value}`,
    '',
  );
};

import { type ReactNode } from 'react';

interface SwitchCaseProps<T extends string | number> {
  case: T;
  caseBy: Partial<Record<T, ReactNode>>;
  defaultComponent?: ReactNode;
}

export const SwitchCase = <T extends string | number>({
  case: value,
  caseBy,
  defaultComponent,
}: SwitchCaseProps<T>) => {
  return caseBy[value] ?? defaultComponent ?? null;
};

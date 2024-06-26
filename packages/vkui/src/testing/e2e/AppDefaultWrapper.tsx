import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';

export type AppWrapperProps = AppRootProps;

export const AppDefaultWrapper = ({
  mode = 'embedded',
  children,
  ...restProps
}: AppWrapperProps) => (
  <AppRoot mode={mode} {...restProps}>
    <div
      style={{
        border: '8px solid var(--playwright-border)',
        background: 'var(--playwright-background)',
      }}
    >
      {children}
    </div>
  </AppRoot>
);

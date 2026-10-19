import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@vercel/otel', () => ({
  registerOTel: vi.fn(),
}));

import { registerOTel } from '@vercel/otel';
import { register } from '../instrumentation';

describe('OpenTelemetry instrumentation', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.clearAllMocks();
  });

  it('registers the default service name when none is configured', () => {
    vi.stubEnv('OTEL_SERVICE_NAME', '');

    register();

    expect(registerOTel).toHaveBeenCalledWith({
      serviceName: 'navneet-sharma-portfolio',
    });
  });

  it('uses the configured service name', () => {
    vi.stubEnv('OTEL_SERVICE_NAME', 'portfolio-staging');

    register();

    expect(registerOTel).toHaveBeenCalledWith({
      serviceName: 'portfolio-staging',
    });
  });
});

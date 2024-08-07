import { ReversePipe } from './reverse.pipe';

describe('Reverse pipe', () => {
  it('should create pipe', () => {
    let pipe = new ReversePipe();
    expect(pipe.transform('hello')).toBe('olleh');
  });
});

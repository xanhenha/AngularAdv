import { ReversePipe } from "./reverse.pipe";

describe('Reverse Pipe', () => {
  it('deveria inverter as ordens das letras', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('Thiago')).toEqual('ogaihT');
  })
})
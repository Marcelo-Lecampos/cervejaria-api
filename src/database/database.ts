import fs from 'fs';

export class DataBase {
  private FILENAME = 'FILENAME';
  public getCervejas(): Array<Cerveja> {
    const cervejasFile = fs.readFileSync('FILENAME').toString();
    const cervejas = JSON.parse(cervejasFile);
    return cervejas;
  }

  public graver(cerveja: Cerveja) {
    fs.writeFileSync(
      this.FILENAME,
      JSON.stringify([...this.getCervejas(), cerveja]),
    );
  }
  public graverCervejas(cervejas: Cervejas[]) {
    fs.writeFileSync(this.FILENAME, JSON.stringify(cervejas));
  }
}

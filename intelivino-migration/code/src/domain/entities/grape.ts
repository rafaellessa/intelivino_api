interface GrapeProps {
  id: number;
  name: string;
  uuid: string;
}

export class Grape {
  id: number;
  name: string;
  uuid: string;
  constructor({ id, name, uuid }: GrapeProps) {
    this.id = id;
    this.name = name;
    this.uuid = uuid;
  }
}

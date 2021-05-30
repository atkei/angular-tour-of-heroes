interface Hero {
  id: number;
  name: string;
}

const heroes: Hero[] = [
  {
    id: 0,
    name: 'Mike'
  },
  {
    id: 1,
    name: 'Tiger'
  }
];

export function find(): Hero[] {
  return heroes;
}

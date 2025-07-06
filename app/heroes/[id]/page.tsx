import Image from 'next/image';

interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  base_health: number;
  base_mana: number;
  base_attack_min: number;
  base_attack_max: number;
  base_armor: number;
  move_speed: number;
  base_str: number;
  base_agi: number;
  base_int: number;
}

export async function generateStaticParams() {
  const res = await fetch('https://api.opendota.com/api/heroStats');
  const heroes = await res.json();
  return heroes.map((hero: Hero) => ({ id: hero.id.toString() }));
}

export default async function HeroDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch('https://api.opendota.com/api/heroStats');
  const heroes: Hero[] = await res.json();
  const hero = heroes.find((h) => h.id.toString() === params.id);

  if (!hero) return <p>Hero not found</p>;

  const heroName = hero.name.replace('npc_dota_hero_', '');
  const imageUrl = `https://api.opendota.com/apps/dota2/images/heroes/${heroName}_full.png`;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{hero.localized_name}</h1>
      <Image src={imageUrl} alt={hero.localized_name} width={240} height={135} />
      <h3>StatusHero</h3>
      <ul>
        <li>AttackType: {hero.attack_type}</li>
        <li>Attribute: {hero.primary_attr.toUpperCase()}</li>
        <li>BaseHealth: {hero.base_health}</li>
        <li>BaseMana: {hero.base_mana}</li>
        <li>BaseAttack: {hero.base_attack_min} - {hero.base_attack_max}</li>
        <li>BaseArmor: {hero.base_armor}</li>
        <li>MovementSpeed: {hero.move_speed}</li>
        <li>STR: {hero.base_str} / AGI: {hero.base_agi} / INT: {hero.base_int}</li>
      </ul>
    </div>
  );
}

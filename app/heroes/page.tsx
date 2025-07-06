'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export async function getHeroes() {
  const res = await fetch('https://api.opendota.com/api/heroStats', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

  

export default async function HeroesPage() {
  const heroes = await getHeroes();
  const router = useRouter();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dota 2 Heroes</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {heroes.map((hero: any) => {
          const heroName = hero.name.replace('npc_dota_hero_', '');
          const imageUrl = `https://api.opendota.com/apps/dota2/images/heroes/${heroName}_full.png`;

          return (
            <div
              key={hero.id}
              onClick={() => router.push(`/heroes/${hero.id}`)}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <Image
                src={imageUrl}
                alt={hero.localized_name}
                width={120}
                height={68}
                style={{ borderRadius: '6px' }}
              />
              <h3>{hero.id}</h3>
              <h3>{hero.localized_name}</h3>
              <p>AttackType: {hero.attack_type}</p>
              <p>Attribute: {hero.primary_attr.toUpperCase()}</p>
              <p>roles: {hero.roles.join(', ')}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import Image from 'next/image';
import styles from './Stars.module.scss';

interface StarsProps {
  stars: number;
  reviews: number;
}

export function Stars({ stars, reviews }: StarsProps) {
  const renderStars = Array.from({ length: stars }, (_, i) => (
    <Image key={i} src='/star.svg' alt='estrela' width={14} height={14} />
  ));

  return <div className={styles.stars}>
    {renderStars}
    {reviews && <span>({reviews})</span>}
    </div>;
}

import MeowFacts from '@/components/MeowFacts';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import clothesImage from '../../../public/images/clothes.jpg';

//export const revalidate = false;   // SSG랜더링
export const revalidate = 3;       // ISG랜더링


export default async function pages() {
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt='Clothes' priority />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowFacts />
    </div>
  );
}


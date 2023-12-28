import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import GoProductsButton from '@/components/GoProductsButton';

type Props = {
  params: {
    slug: string;
  };
};

//export const revalidate = false;   // SSG랜더링
export const revalidate = 3;       // ISG랜더링

// 페이지 SEO 타이틀 만들기
export async function generateMetadata({params} : Props) {
  const product = await getProduct(params.slug);

  if (!product) {
    //notFound();
    redirect('/products');
  }

  return {
    title: `제품의 이름: ${product.name}`,
  };
}

export default async function ProductPage({params: {slug}}: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image 
        src={`/images/${product.image}`}
        alt = {product.image}
        width = '300'
        height = '300'
      />
      <GoProductsButton />
    </div>
  );
}

// 페이지 미리 만들기
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}

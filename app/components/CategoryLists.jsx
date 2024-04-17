
import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';
import { FaTrophy } from "@react-icons/all-files/fa/FaTrophy";

export function CategoryLists({ collections }) {

    return (
        <div className="category-lists">
            <h3 className='mb-5 text-gray-200 text-3xl font-bold dark:text-white'>Categorías cursos</h3>
            <ul>
                {collections.nodes.map((collection) => (
                    <li key={collection.id}>
                        <Link to={`/collections/${collection.handle}`} className='flex items-center gap-2'>
                            {/* <div className='image'>
                                <Image data={collection.image} sizes="(min-width: 45em) 20vw, 20vw" />
                            </div> */}
                            <FaTrophy />
                            {collection.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
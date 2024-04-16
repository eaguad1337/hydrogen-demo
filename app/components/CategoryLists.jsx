
import { Link } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';

export function CategoryLists({ collections }) {

    return (
        <div className="category-lists">
            <ul>

                {collections.nodes.map((collection) => (
                    <li key={collection.id}>
                        <Link to={`/collections/${collection.handle}`} >
                            <div className='image'>
                                <Image data={collection.image} sizes="(min-width: 45em) 20vw, 20vw" />
                            </div>
                            {collection.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
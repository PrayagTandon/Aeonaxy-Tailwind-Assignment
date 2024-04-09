import { categoriesList } from '../constants';

const Categories = () => {
    return (
        <aside className="w-1/4 pr-12">
            <h2 className="text-3xl font-extrabold font-montserrat mb-6">Categories</h2>
            <ul className="flex flex-col justify-start items-start gap-2">
                {categoriesList.map((listItem) => (
                    <li
                        key={listItem.title}
                        className="w-full py-4 transition-all hover:bg-primary hover:text-white rounded-2xl"
                    >
                        <a
                            href="#"
                            className="pl-4 text-base block font-semibold"
                        >
                            {listItem.title}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
};

export default Categories;
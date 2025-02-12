import content from './content.json';

function Samples(){
    return(
        <div className='p-4 h-screen'>
            <span className='text-3xl text-gray-800 dark:text-white font-black mb-4 flex'>نمونه کار ها</span>
            <div className='grid lg:grid-cols-2 gap-4 p-4'>
                {content.samples.map((item)=>{
                    return(
                        <div key={item.id} className="flex flex-col items-center p-4 gap-4 w-full h-80 bg-gray-100 dark:bg-slate-700 shadow-lg rounded-xl">
                            <img className='bg-white w-full rounded-lg !h-48 object-contain' alt={item.name} src={item.image}></img>
                            <span className='font-bold text-lg text-gray-700 dark:text-gray-100 text-sm'>{item.name}</span>
                            <p className='text-xs text-gray-700 dark:text-gray-100'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Samples;
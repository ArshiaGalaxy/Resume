import content from './content.json';

function Workes(){
    return(
        <div className='p-4 h-full'>
            <span className='text-3xl text-gray-800 dark:text-white font-black mb-4 flex'> سوابق شغلی</span>
            <div className='grid lg:grid-cols-2 gap-4 p-4'>
                {content.workes.map((item)=>{
                    return(
                        <div key={item.id} className="flex items-center p-4 w-full h-16 bg-gray-100 dark:bg-slate-700 shadow-inner rounded-xl">
                            <span className='font-bold text-lg text-gray-700 dark:text-gray-100 text-sm text-nowrap'>{item.name}</span>
                            <p className='text-xs text-gray-700 dark:text-gray-100 bg-white dark:bg-slate-800 ms-8 px-4 py-0.5 shadow-lg rounded-lg font-bold'>{item.date}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Workes;
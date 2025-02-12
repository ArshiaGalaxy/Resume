import content from './content.json';

function Skills(){
    return(
        <div className='p-4 h-screen'>
            <span className='text-3xl text-gray-800 dark:text-white font-black mb-4 flex'>مهارت ها</span>
            <div className='grid lg:grid-cols-2 gap-8 p-4'>
                {content.skills.map((item)=>{
                    return(
                        <div key={item.id} className="flex items-center gap-4 w-full">
                            <span className='font-bold text-lg text-gray-700 dark:text-gray-100 w-32 text-nowrap'>{item.name}</span>
                            <span className='w-full h-4'>
                                <span className='h-full rounded-full shadow-lg bg-gradient-to-tl from-purple-600 to-pink-400 flex' style={{'width':item.value+'%'}}></span>
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;

interface types {
    selected:Number|null,
    setSelected:React.Dispatch<React.SetStateAction<any>>,
    id:Number,
    question:String,
    answer:String,

}
const FaqItem = ({question,selected,setSelected, id, answer}:types) => {

    const openQuestion = (id:Number)=>{
        if(selected!=id){
            setSelected(id);
        }
        else{
            setSelected(null);
        }
    }

    return (
        <div className={`w-full bg-gray-500 font-bold   h-[70px]  items-center ${(selected==id?'mb-20 max-[768px]:mb-30 max-[460px]:mb-36':'mb-4')} max-[768px]:h-[50px] max-[368px]:h-[30px]`}>
            <div className={"w-full flex justify-between h-full items-center px-4 "}>
                <div className={"text-2xl  max-[768px]:text-xl max-[368px]:text-lg"}>{question}</div>
                <div onClick={()=>openQuestion(id)} className={`text-5xl font-thin cursor-pointer ${(selected==id?'transform rotate-45':'transform rotate-0')} max-[768px]:text-xl`}>+</div>
            </div>
            <div className={`bg-gray-500 p-2 font-thin ${(selected==id?'opacity-100 h-fit':'opacity-0 h-[0px]')} max-[768px]:text-sm `}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
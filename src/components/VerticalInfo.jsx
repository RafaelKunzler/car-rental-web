const VerticalInfo = (props) => {
  return (
    <div className="flex flex-col items-center text-center ">
        <img src={props.image} className=""/>
        <div className="flex flex-col gap-6">
            <h1 className="font-bold text-4xl">{props.title}</h1>
            <p className="text-muted-foreground text-xl">{props.description}</p>
        </div>
    </div>
  )
}

export default VerticalInfo
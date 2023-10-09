/* eslint-disable react/prop-types */

const MainBanner = (props) => {
  return (
    <div className="px-4 lg:px-12 flex flex-col gap-6 items-center text-center ">
        <h3 className="font-bold text-3xl">{props.subTitle}</h3>
        <h1 className="font-bold text-6xl">{props.title}</h1>
        <p className="text-muted-foreground text-xl max-w-2xl text-center">{props.description}</p>
    </div>
  )
}

export default MainBanner
function Button({children, styles, onClick, inCart}){
    const style = {
        cta: "bg-yellow-300 text-lg hover:bg-yellow-600 transition-all duration-300 tracking-wider text-slate-600 hover:text-stone-100 cursor-pointer font-semibold rounded-md mt-6 px-4 py-2",
        primary: "font-medium text-xs px-3 py-2 text-slate-600 tracking-wider rounded-md cursor-pointer uppercase",
        small:"px-2  bg-yellow-400 cursor-pointer font-bold text-stone-700 rounded-md"
    }
    return <button onClick={onClick} className={`${style[styles]} ${inCart ? "bg-stone-400":"bg-yellow-400"}`}>{children}</button>
}

export default Button;
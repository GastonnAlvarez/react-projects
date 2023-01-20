const Error = ({ msg }) => {
    return (
        <div className="bg-red-600 font-bold text-white text-center uppercase mb-3 p-4">
            <p>{msg}</p>
        </div>
    )
}

export default Error
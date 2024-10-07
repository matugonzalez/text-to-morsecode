const Textarea = ({name, value, onChange}) => {
    return (
        <textarea
            className='p-2 rounded'
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
export default Textarea
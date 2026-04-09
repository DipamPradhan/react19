export const ContactForm = () => {
    return (
        <form action="">
            <label htmlFor="fullName" className="fullName">FullName: </label>
            <input type="text" name="fullName" placeholder ="Your Full Name"/>
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder ="Your Email"/>
            <br />
            <button type="submit">Save</button>
        </form>
    )
}
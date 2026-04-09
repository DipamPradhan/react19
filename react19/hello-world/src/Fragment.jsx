export const Fragment = () => {
    const name = "Dipam Pradhan"
    const role = "Developer"
    const isAvailable = false
    return(
    <>
        <h1>Hello {name}</h1>
        <p>Role: {role}</p>
        <p>Status: {isAvailable?"Available for Hire":"Not Available"}</p>
        <p>Contact: {name.toLowerCase().replace(" ",".")}@gmail.com</p>
    </>
    )
}
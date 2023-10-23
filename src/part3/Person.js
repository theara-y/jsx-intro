const Person = ({name, age, hobbies}) => (
    <>
        <p>Learn some information about this person</p>

        <h3>{age > 18 ? 'Please go vote!' : 'You must be 18'}</h3>
        
        { 
            name.length > 8 ? 
                <p>{name.slice(0, 6)}...</p>
                :<p>{name}</p>
        }

        {
            hobbies.length != 0 ? 
            <ul>{hobbies.map(hobby => (<li>{hobby}</li>))}</ul>
            : <p>No hobbies</p>
        }
    </>
);

export default Person;
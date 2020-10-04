import React, {useState} from 'react';

export default function SignupForm() {
    const [firstMiddleName, setFirstMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCAgain, setPasswordAgain] = useState('');
    const [sendNotification, setSendNotification] = useState(false);

    function handleTextInputChange(f,e) {
        f(e.target.value);
    }

    function handleCheckboxChange(f,e) {
        f(e.target.checked);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit button hit!');
    }

    return (
        <div className="container mt-3">
            <h1>Add new account</h1>
            <h5>Create a branch new account</h5>
            <form className="my-5" onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="field1" className="col-sm-3 col-form-label">First and Middle Name</label>
                    <div className="col-sm-7">
                        <input
                            id="field1"
                            className="form-control"
                            type="text"
                            value={firstMiddleName}
                            onChange={(e) => handleTextInputChange(setFirstMiddleName, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field2" className="col-sm-3 col-form-label">Last Name</label>
                    <div className="col-sm-7">
                        <input
                            id="field2"
                            className="form-control"
                            type="text"
                            value={lastName}
                            onChange={(e) => handleTextInputChange(setLastName, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field3" className="col-sm-3 col-form-label">User Name</label>
                    <div className="col-sm-7">
                        <input
                            id="field3"
                            className="form-control"
                            type="text"
                            value={userName}
                            onChange={(e) => handleTextInputChange(setUserName, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field4" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-7">
                        <input
                            id="field4"
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={(e) => handleTextInputChange(setEmail, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field5" className="col-sm-3 col-form-label">Phone Number</label>
                    <div className="col-sm-7">
                        <input
                            id="field5"
                            className="form-control"
                            type="number"
                            value={phoneNumber}
                            onChange={(e) => handleTextInputChange(setPhoneNumber, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field6" className="col-sm-3 col-form-label">Role</label>
                    <div className="col-sm-7">
                        <input
                            id="field6"
                            className="form-control"
                            type="text"
                            value={role}
                            onChange={(e) => handleTextInputChange(setRole, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field7" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-7">
                        <input
                            id="field7"
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={(e) => handleTextInputChange(setPassword, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="field8" className="col-sm-3 col-form-label">Confirm Password</label>
                    <div className="col-sm-7">
                        <input 
                            id="field8"
                            className="form-control"
                            type="password"
                            value={passwordCAgain}
                            onChange={(e) => handleTextInputChange(setPasswordAgain, e)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Send Notification</label>
                    <div className="col-sm-7">
                        <div className="form-check form-control border-0">
                        <input
                            id="field9"
                            className="form-check-input"
                            type="checkbox"
                            checked={sendNotification}
                            onChange={(e) => handleCheckboxChange(setSendNotification, e)}
                        />
                        <label htmlFor="field9" className="form-check-label">Send the user an email about their account</label>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                {/* <button className="btn btn-lg btn-light col-sm-3">Cancel</button> */}
                <input className="btn btn-lg btn-primary col-sm-3" type="submit"/>
                </div>
                
            </form>
        </div>
    );
}
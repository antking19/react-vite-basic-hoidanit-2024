import { Input, Button } from "antd";
import axios from "axios";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone,
        };

        axios.post(URL_BACKEND, data);
    };

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                }}
            >
                <div>
                    <span>Full Name:</span>
                    <div>
                        <Input
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(event) =>
                                setFullName(event.target.value)
                            }
                        />
                    </div>
                </div>

                <div>
                    <span>Email:</span>
                    <div>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <span>Password:</span>
                    <div>
                        <Input.Password
                            placeholder="Password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </div>
                </div>

                <div>
                    <span>Phone:</span>
                    <div>
                        <Input
                            placeholder="Phone"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <Button type="primary" onClick={handleClickBtn}>
                        Create User
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;

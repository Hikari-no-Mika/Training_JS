import {Button, Form} from "react-bootstrap"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const RegistrationPage = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const validate = () => {
        if (!name || !email || !password || !passwordConfirm) {
            alert('Заполните все поля!')
            return false;
        }
        if (password !== passwordConfirm) {
            alert('Пароли должны быть одинаковы!')
            return false;
        }
        return true;
    }
    const handleSubmit = () => {
        if (!validate()) return;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Accept-Language", "en");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/register", requestOptions)
            .then(response => response.text())
            .then(result => {

                // {"token":"4fcf3f78138f61fe6273dbd1d6c05f15e30496d7a085919bbcdcf11f271dcecfb564cd09ae8877ede8f0b29ede2a1cbf4778a598a463b738539006f4a7eb010a4ec83e631097ad56b6e013987f80ea143b9a56aea50748f7ac4913a91f4efb5840fbc4a0d3b12770735ef9e7cd91cfa55784feb1c7ddabd877f027b90b87bc44a3fe0f83a049ad5eec846ab76ab53c7a651ff5a2058c0795b9cee822c9b760492d8c113e0357e206ccde16713641765fa0f6914e60ce13ab44e3492612faaa24","user":{"_id":"66b63ba97ce5166d1cfc7864","name":"Test","email":"testemail@mail.com","role":"user","verified":false,"verification":"e5044bb6-5e51-4c33-960e-98df1a509ae6"}}

               result = JSON.parse(result);
                if ('token' in result) {
                    let token = result.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify({
                        "name": result.user.name,
                        "email": result.user.email,
                    }));

                    let verification = result.user.verification;
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("id", "verification");
                    console.log(verification);

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow'
                    };

                    fetch("http://localhost:8000/verify", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result);
                            navigate('/')
                        })

                        .catch(error => console.log('error', error));
                }


            })
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <h1>Регистрация </h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя арендатора</Form.Label>
                    <Form.Control type="text"
                                  name="name"
                                  placeholder="Введите имя"
                                  value={name}
                                  onChange={ev => setName(ev.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  placeholder="Введите email"
                                  value={email}
                                  onChange={ev => setEmail(ev.target.value)}
                    />
                    <Form.Text className="text-muted">
                        Мы никогда не передаём ваши персональные данные кому-либо еще.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  placeholder="Введите пароль"
                                  value={password}
                                  onChange={ev => setPassword(ev.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                    <Form.Label>Подтвердите пароль</Form.Label>
                    <Form.Control type="password"
                                  name="passwordConfirm"
                                  placeholder="Введите пароль"
                                  value={passwordConfirm}
                                  onChange={ev => setPasswordConfirm(ev.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={() => {
                    handleSubmit()
                }}>
                    Зарегистрироваться
                </Button>
            </Form>
        </>
    )
}
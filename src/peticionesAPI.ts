import axios from "axios";
import http from "http";
import * as nodemailer from "nodemailer";
import { Observable } from "rxjs";
import * as URL from "./urls";


export class PeticionesAPIService {
    public DameAlumnosEquipo(equipoId: number): any {
        return axios.get(URL.APIUrlEquipos + "/" + equipoId + "/alumnos");
    }
    public DameAlumnosGrupo(grupoId: number): any {
        return axios.get(URL.APIUrlGrupos + "/" + grupoId + "/alumnos");
    }

    public EnviarEmail(email: string, nombre: string, contrasena: string) {
        const transporter = nodemailer.createTransport({
            auth: {
                user: "classpip@gmail.com", // Cambialo por tu email
                pass: "Classpip@2016" // Cambialo por tu password
            },
            service: "gmail",
        });
        const mailOptions = {
            from: "Classpip",
            to: email, // Cambia esta parte por el destinatario
            subject: "tu contraseña en Classpip",
            html: nombre + ", <br> Tu contraseña en classpip es: " + contrasena,
        };
        // tslint:disable-next-line:only-arrow-functions
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    
    }

    public EnviarEmailRegistroAlumno(profesor: any, alumno: any) {
        console.log ('voy a enviar emial a ' + alumno.Email);
    
        const transporter = nodemailer.createTransport({
            auth: {
                user: "classpip@gmail.com", // Cambialo por tu email
                pass: "Classpip@2016" // Cambialo por tu password
            },
            service: "gmail",
        });
        const mailOptions = {
            from: "Classpip",
            to: alumno.Email,
            subject: "registro en Classpip",
            html:   "Has sido registrado en Classpip por tu profesor: <br>" +
                    profesor.Nombre + " " + profesor.PrimerApellido + " " + profesor.SegundoApellido +
                    "<br><br> Tus datos son: <br>" +
                    "Nombre: " + alumno.Nombre + "<br>" +
                    "Primer apellido: " + alumno.PrimerApellido + "<br>" +
                    "Segundo apellido: " + alumno.SegundoApellido + "<br>" +
                    "Nombre de usuario: " + alumno.Username + "<br>" +
                    "Contraseña: " + alumno.Password + "<br>" +
                    "Email: " + alumno.Email + "<br><br>" +
                    // tslint:disable-next-line:max-line-length
                    "En cuanto puedas por favor cambia tu contraseña (también puedes cambiar tu nombre de usuario) <br> <br>" +
                    "Bienvenido a Classpip",
        };
        // tslint:disable-next-line:only-arrow-functions
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    
    }
}



import bcrypt from "bcryptjs";
import { prismaClient } from "../database/PrismaClient.js";

export class UsuarioController {

    async buscarUsuarioPorId (request, response) {
        const { id } = request.params;

        try {
            const usuarios = await prismaClient.usuarios.findFirst({
                where: { id: parseInt(id) },
                include: {
                    agendamentos: true
                }
            });
            return response.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao buscar usuários", detail: error.message });
        }
    }

    async buscarUsuarios (request, response) {
        
        try {
            const usuarios = await prismaClient.usuarios.findMany();
            return response.status(200).json(usuarios)
        } catch(error) {
            return response.status(500).json({ error: error})
        }
    }

    async salvarUsuario (request, response) { 
        const { nome, email, senha, telefone, isAdmin } = request.body;
        try {
            const senhaEncrypt = bcrypt.hashSync(senha, 10);
            const usuario = await prismaClient.usuarios.create({
                data: {
                    nome,
                    senha: senhaEncrypt,
                    telefone,
                    email,
                    is_admin: isAdmin
                }
            });
            return response.status(200).json(usuario)
        } catch(error) {
            return response.status(500).json({ error: error})
        }
    }

    async atualizarUsuario (request, response) { 
        const { id } = request.params;
        const { nome, email, senha, telefone, isAdmin } = request.body;
        try {
            const data = { nome, email, telefone, is_admin: isAdmin };

            if (senha) {
                data.senha = bcrypt.hashSync(senha, 10);
            }

            const usuario = await prismaClient.usuarios.update({
                where: { id: parseInt(id) },
                data
            });
            return response.status(200).json(usuario);
        } catch(error) {
            return response.status(500).json({ error: error})
        }
    }

    async deletarUsuario (request, response) { 
        const { id } = request.params;
        try {
            const usuario = await prismaClient.usuarios.findFirst({
                where: { id: parseInt(id) }
            });
    
            if (!usuario) {
                return response.status(404).json({message: "Usuário não encontrado"});
            }
    
            await prismaClient.usuarios.delete({
                where: { id: parseInt(id) }
            });
            
            return response.status(204).send();
        } catch(error) {
            return response.status(500).json({ error: error})
        }
    }

}
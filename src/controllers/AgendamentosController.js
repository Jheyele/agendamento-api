import { prismaClient } from "../database/PrismaClient.js";

export class AgendamentoController {

    async salvarAgendamento (request, response) {
        const { descricao, data, usuarioId } = request.body;
        try {
            const agendamento = await prismaClient.agendamentos.create({
                data:{
                    data_hora: new Date(data),
                    descricao,
                    usuario_id: parseInt(usuarioId)
                }
            })

            return response.status(200).json(agendamento);

        } catch(error) {
            return response.status(200).json({ error: error.details });
        }
    }

    async buscarAgendamento (request, response) {
        const {id} = request.params;
        try {
            const usuarios = await prismaClient.agendamentos.findFirst({
                where: { id: parseInt(id) },
                select: { 
                    id: true, 
                    descricao: true,
                    usuario_id: false,
                    data_hora: true,
                    usuarios: true
                }
            });
            return response.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao buscar usuários", detail: error.message });
        }
    }

}
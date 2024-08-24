export interface GameLine {
    id: number,
    reclamacoesAnteriores: number,
    reclamacao: string,
    SteamID: string,
    formato: string,
    ChaveRecebida: string,
    nomeJogo: string,
    precoDoJogo: number,
    NotaMetacritic: number,
    Steam: boolean,
    ClassificacaoRandomG2A: string,
    Observacao: string,
    LeilaoG2A: string,
    LeilaoGamivo: string,
    LeilaoKinguin: string,
    Plataforma: string,
    PrecoCliente: number,
    PrecoVenda: number,
    IncomeReal: number,
    IncomeSimulado: number,
    ChaveEntregue: string,
    ValorPagoTotal: string,
    ValorPagoIndividual: string,
    Vendido: boolean,
    Leiloes: number,
    Qtd: number,
    Devolucoes: number,
    LucroReal: number,
    LucroPercentual: number,
    DataAdquirida: string,
    DataVenda: string,
    DataVendida: string,
    PerfilOrigem: string,
    email: string,
}
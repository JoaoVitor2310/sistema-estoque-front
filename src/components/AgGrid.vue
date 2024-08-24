<script setup lang="ts">
import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // CSS obrigatório para o Data Grid
import "ag-grid-community/styles/ag-theme-balham.css"; // Tema opcional aplicado ao Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Componente Data Grid do Vue
import type { GameLine } from '@/types/GameLine';

// Definindo as colunas da tabela
const colDefs = ref([
    { field: "id", headerName: "ID" },
    { field: "reclamacoesAnteriores", headerName: "Reclamações Anteriores" },
    { field: "reclamacao", headerName: "Reclamação" },
    { field: "SteamID", headerName: "SteamID" },
    { field: "formato", headerName: "formato" },
    { field: "ChaveRecebida", headerName: "Chave Recebida?" },
    { field: "nomeJogo", headerName: "Nome do Jogo" },
    { field: "precoDoJogo", headerName: "Preço do Jogo (€)" },
    { field: "NotaMetacritic", headerName: "Nota Metacritic" },
    { field: "Steam", headerName: "Disponível na Steam?" },
    { field: "ClassificacaoRandomG2A", headerName: "Classificação G2A" },
    { field: "Observacao", headerName: "Observação" },
    { field: "LeilaoG2A", headerName: "Leilão G2A" },
    { field: "LeilaoGamivo", headerName: "Leilão Gamivo" },
    { field: "LeilaoKinguin", headerName: "Leilão Kinguin" },
    { field: "Plataforma", headerName: "Plataforma" },
    { field: "PrecoCliente", headerName: "Preço Cliente (€)" },
    { field: "PrecoVenda", headerName: "Preço de Venda (€)" },
    { field: "IncomeReal", headerName: "Lucro Real (€)" },
    { field: "IncomeSimulado", headerName: "Lucro Simulado (€)" },
    { field: "ChaveEntregue", headerName: "Chave Entregue?" },
    { field: "ValorPagoTotal", headerName: "Valor Pago Total (€)" },
    { field: "ValorPagoIndividual", headerName: "Valor Pago Individual (€)" },
    { field: "Vendido", headerName: "Vendido?" },
    { field: "Leiloes", headerName: "Número de Leilões" },
    { field: "Qtd", headerName: "Quantidade" },
    { field: "Devolucoes", headerName: "Número de Devoluções" },
    { field: "LucroReal", headerName: "Lucro Real (€)" },
    { field: "LucroPercentual", headerName: "Lucro (%)" },
    { field: "DataAdquirida", headerName: "Data Adquirida" },
    { field: "DataVenda", headerName: "Data de Venda" },
    { field: "DataVendida", headerName: "Data Vendida" },
    { field: "PerfilOrigem", headerName: "Perfil de Origem" },
    { field: "email", headerName: "Email do Cliente" },
]);

// Definindo os dados da tabela
const rowData = ref<GameLine[]>([
    {
        id: 1, 
        reclamacoesAnteriores: 1,
        reclamacao: "dup",
        SteamID: '64950',
        formato: 'RK',
        ChaveRecebida: "Sim",
        nomeJogo: "Cyberpunk 2077",
        precoDoJogo: 59.99,
        NotaMetacritic: 85,
        Steam: true,
        ClassificacaoRandomG2A: "Gold",
        Observacao: "Problemas na chave anterior",
        LeilaoG2A: "Sim",
        LeilaoGamivo: "Não",
        LeilaoKinguin: "Sim",
        Plataforma: "PC",
        PrecoCliente: 49.99,
        PrecoVenda: 59.99,
        IncomeReal: 10.00,
        IncomeSimulado: 9.50,
        ChaveEntregue: "Sim",
        ValorPagoTotal: "50.00",
        ValorPagoIndividual: "50.00",
        Vendido: true,
        Leiloes: 3,
        Qtd: 1,
        Devolucoes: 0,
        LucroReal: 10.00,
        LucroPercentual: 20.00,
        DataAdquirida: "2024-01-01",
        DataVenda: "2024-02-01",
        DataVendida: "2024-02-02",
        PerfilOrigem: "Perfil Steam",
        email: "cliente1@email.com"
    },
]);

interface SizeColumnsToContentStrategy {
  type: 'fitCellContents';
  // If true, the header won't be included when calculating the column widths. 
  skipHeader?: boolean;
  // If not provided will auto-size all columns. Otherwise will size the specified columns.
  colIds?: string[];
}

const autoSizeStrategy: SizeColumnsToContentStrategy = {
    type: 'fitCellContents',
    skipHeader: false,
}

</script>

<template>
    <div class="d-flex justify-content-center">
        <p>a</p>
    </div>
    <AgGridVue :rowData="rowData" :columnDefs="colDefs" style="width: 100%; height: 50vh;" :autoSizeStrategy="autoSizeStrategy" class="ag-theme-balham">
    </AgGridVue>
</template>
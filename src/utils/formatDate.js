export function formatDate(date) {
  if (!date) return 'Data não disponível';

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return 'Data inválida';

  return parsedDate.toLocaleDateString('pt-BR', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

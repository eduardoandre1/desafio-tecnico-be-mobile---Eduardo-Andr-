import Swal from 'sweetalert2';
export default function employersFilter(data, searchName) {
  if (searchName.length === 0) {
    return data;
  }
  const filter = data.filter((enployer) => {
    if (
      enployer.name.toLowerCase().includes(searchName.toLowerCase()) ||
      enployer.job.toLowerCase().includes(searchName.toLowerCase())
    )
      return enployer;
  });
  if (filter.length === 0 && searchName.length > 0) {
    Swal.fire({
      title: 'Não foi possivel encontrar',
      text: 'verifique se o usuario usuario ou o cargo foram escritos corretamente',
      icon: 'error',
      confirmButtonText: 'ok',
    });
    return data;
  }
  return filter;
}

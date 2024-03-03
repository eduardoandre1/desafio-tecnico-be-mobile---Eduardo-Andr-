export default function employersFilter(data, searchName) {
    if(searchName.length === 0) {
        return data;
    }
    const filter = data.filter((enployer) => {
    if(enployer.name.toLowerCase().includes(searchName.toLowerCase())||enployer.job.toLowerCase().includes(searchName.toLowerCase()))
    return enployer;
  });
  if(filter.length === 0 && searchName.length > 0){
    alert('usuario ou cargo não encontrados')
    return data
  }
  return filter;
}

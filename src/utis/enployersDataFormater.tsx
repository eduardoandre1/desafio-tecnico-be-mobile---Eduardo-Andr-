export default function enployersDataFormater(data){
    const dataFormated = data.map((enployer)=>{
        const dataFormatterBrasilTime = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
        enployer.admission_date = dataFormatterBrasilTime.format(new Date(enployer.admission_date))

        if(enployer.phone.length == 13){
            enployer.phone = '+'+enployer.phone.substr(0,2)+' ('+enployer.phone.substr(1,2)+') '+ enployer.phone.substr(2,10)+'-'+enployer.phone.substr(10)
        }
        if(enployer.phone.length == 11){
            enployer.phone = ' ('+enployer.phone.substr(0,2)+') '+enployer.phone.substr(2,7)+'-'+enployer.phone.substr(7);
        }


        return enployer
    })

    return dataFormated
}
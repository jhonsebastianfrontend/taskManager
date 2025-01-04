export function parseDate(dateString:string) {
    const [year, month, day] = dateString.split('-');
    const fullYear = `20${year}`; 
    
    const date = new Date(`${fullYear}-${month}-${day}`);
    
    return date;
}
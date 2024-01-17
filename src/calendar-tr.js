import {addLocale} from "primereact/api";
   
export default function addTRLocale() {
    addLocale('tr', {
      firstDayOfWeek: 1,
      dayNames: ["pazar", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi"],
      dayNamesShort: ["paz", "pzt", "sal", "çar", "per", "cum", "cmt"],
      dayNamesMin: ["Pa", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
      monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
      monthNamesShort: ["Ocak", "Şub", "Mart", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Ekim", "Kas", "Ara"],
      today: 'Bugün',
      clear: 'Temizle'
    });
  }
  
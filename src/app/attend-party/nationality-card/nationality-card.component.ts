import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/responsive.service';

@Component({
  selector: 'app-nationality-card',
  templateUrl: './nationality-card.component.html',
  styleUrls: ['./nationality-card.component.css']
})
export class NationalityCardComponent implements OnInit {
  @Input() nationality: string;
  flagIconPath: string;
  public isMobile: boolean; 

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.setFlagIcon();  
    this.onResize()
    this.responsiveService.checkWidth(); 
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }


  setFlagIcon() {    
    switch (this.nationality) {
      case 'Afghanistan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_afghanistan.png'; break; }
      case 'Aland Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_aland_islands.png'; break; }
      case 'Albania': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_albania.png'; break; }
      case 'Algeria': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_algeria.png'; break; }
      case 'American Samoa': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_american_samoa.png'; break; }
      case 'Andorra': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_andorra.png'; break; }
      case 'Angola': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_angola.png'; break; }
      case 'Anguilla': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_anguilla.png'; break; }
      case 'Antigua and Barbuda': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_antigua_and_barbuda.png'; break; }
      case 'Argentina': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_argentina.png'; break; }
      case 'Armenia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_armenia.png'; break; }
      case 'Aruba': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_aruba.png'; break; }
      case 'Australia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_australia.png'; break; }
      case 'Austria': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_austria.png'; break; }
      case 'Azerbaijan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_azerbaijan.png'; break; }
      case 'Bahamas': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bahamas.png'; break; }
      case 'Bahrain': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bahrain.png'; break; }
      case 'Bangladesh': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bangladesh.png'; break; }
      case 'Barbados': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_barbados.png'; break; }
      case 'Belarus': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_belarus.png'; break; }
      case 'Belgium': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_belgium.png'; break; }
      case 'Belize': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_belize.png'; break; }
      case 'Benin': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_benin.png'; break; }
      case 'Bermuda': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bermuda.png'; break; }
      case 'Bhutan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bhutan.png'; break; }
      case 'Bolivia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bolivia.png'; break; }
      case 'Bosnia and Herzegovina': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bosnia_and_herzegovina.png'; break; }
      case 'Botswana': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_botswana.png'; break; }
      case 'Brazil': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_brazil.png'; break; }
      case 'British Indian Ocean Territory': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_british_indian_ocean_territory.png'; break; }
      case 'Virgin Islands (British)': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_british_virgin_islands.png'; break; }
      case 'Brunei': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_brunei.png'; break; }
      case 'Bulgaria': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_bulgaria.png'; break; }
      case 'Burkina Faso': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_burkina_faso.png'; break; }
      case 'Burundi': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_burundi.png'; break; }
      case 'Cambodia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cambodia.png'; break; }
      case 'Cameroon': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cameroon.png'; break; }
      case 'Canada': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_canada.png'; break; }
      case 'Cape Verde': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cape_verde.png'; break; }
      case 'Cayman Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cayman_islands.png'; break; }
      case 'Central African Republic': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_central_african_republic.png'; break; }
      case 'Chad': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_chad.png'; break; }
      case 'Chile': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_chile.png'; break; }
      case 'China': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_china.png'; break; }
      case 'Christmas Island': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_christmas_island.png'; break; }
      case 'Cocos (Keeling) Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cocos_island.png'; break; }
      case 'Colombia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_colombia.png'; break; }
      case 'Comoros': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_comoros.png'; break; }
      case 'Cook Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cook_islands.png'; break; }
      case 'Costa Rica': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_costa_rica.png'; break; }
      case 'Croatia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_croatia.png'; break; }
      case 'Cuba': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cuba.png'; break; }
      case 'Curacao': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_curacao.png'; break; }
      case 'Cyprus': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_cyprus.png'; break; }
      case 'Czech Republic': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_czech_republic.png'; break; }
      case 'Congo': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_democratic_republic_of_congo.png'; break; }
      case 'Denmark': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_denmark.png'; break; }
      case 'Djibouti': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_djibouti.png'; break; }
      case 'Dominica': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_dominica.png'; break; }
      case 'Dominican Republic': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_dominican_republic.png'; break; }
      case 'Ecuador': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_ecuador.png'; break; }
      case 'Egypt': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_egypt.png'; break; }
      case 'England': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_england.png'; break; }
      case 'Equatorial Guinea': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_equatorial_guinea.png'; break; }
      case 'Eritrea': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_eritrea.png'; break; }
      case 'Estonia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_estonia.png'; break; }
      case 'Ethiopia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_ethiopia.png'; break; }
      case 'Falkland Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_falkland_islands.png'; break; }
      case 'Faroe Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_faroe_islands.png'; break; }
      case 'Fiji': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_fiji.png'; break; }
      case 'Finland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_finland.png'; break; }
      case 'France': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_france.png'; break; }
      case 'French Polynesia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_french_polynesia.png'; break; }
      case 'Gabon': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_gabon.png'; break; }
      case 'Gambia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_gambia.png'; break; }
      case 'Georgia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_georgia.png'; break; }
      case 'Germany': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_germany.png'; break; }
      case 'Ghana': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_ghana.png'; break; }
      case 'Gibraltar': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_gibraltar.png'; break; }
      case 'Greece': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_greece.png'; break; }
      case 'Greenland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_greenland.png'; break; }
      case 'Grenada': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_grenada.png'; break; }
      case 'Guam': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_guam.png'; break; }
      case 'Guatemala': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_guatemala.png'; break; }
      case 'Guernsey': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_guernsey.png'; break; }
      case 'Guinea-Bissau': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_guinea-bissau.png'; break; }
      case 'Guinea': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_guinea.png'; break; }
      case 'Guyana': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_guyana.png'; break; }
      case 'Haiti': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_haiti.png'; break; }
      case 'Honduras': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_honduras.png'; break; }
      case 'Hong Kong': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_hong_kong.png'; break; }
      case 'Hungary': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_hungary.png'; break; }
      case 'Iceland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_iceland.png'; break; }
      case 'India': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_india.png'; break; }
      case 'Indonesia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_indonesia.png'; break; }
      case 'Iran': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_iran.png'; break; }
      case 'Iraq': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_iraq.png'; break; }
      case 'Ireland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_ireland.png'; break; }
      case 'Isle of Man': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_isle_of_man.png'; break; }
      case 'Israel': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_israel.png'; break; }
      case 'Italy': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_italy.png'; break; }
      case 'Cote d\'Ivoire': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_ivory_coast.png'; break; }
      case 'Jamaica': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_jamaica.png'; break; }
      case 'Japan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_japan.png'; break; }
      case 'Jersey': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_jersey.png'; break; }
      case 'Jordan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_jordan.png'; break; }
      case 'Kazakhstan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_kazakhstan.png'; break; }
      case 'Kenya': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_kenya.png'; break; }
      case 'Kiribati': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_kiribati.png'; break; }
      case 'Kosovo': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_kosovo.png'; break; }
      case 'Kuwait': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_kuwait.png'; break; }
      case 'Kyrgyzstan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_kyrgyzstan.png'; break; }
      case 'Laos': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_laos.png'; break; }
      case 'Latvia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_latvia.png'; break; }
      case 'Lebanon': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_lebanon.png'; break; }
      case 'Lesotho': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_lesotho.png'; break; }
      case 'Liberia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_liberia.png'; break; }
      case 'Libya': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_libya.png'; break; }
      case 'Liechtenstein': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_liechtenstein.png'; break; }
      case 'Lithuania': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_lithuania.png'; break; }
      case 'Luxembourg': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_luxembourg.png'; break; }
      case 'Macao': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_macao.png'; break; }
      case 'Madagascar': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_madagascar.png'; break; }
      case 'Malawi': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_malawi.png'; break; }
      case 'Malaysia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_malaysia.png'; break; }
      case 'Maldives': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_maldives.png'; break; }
      case 'Mali': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_mali.png'; break; }
      case 'Malta': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_malta.png'; break; }
      case 'Marshall Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_marshall-island.png'; break; }
      case 'Martinique': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_martinique.png'; break; }
      case 'Mauritania': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_mauritania.png'; break; }
      case 'Mauritius': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_mauritius.png'; break; }
      case 'Mexico': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_mexico.png'; break; }
      case 'Micronesia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_micronesia.png'; break; }
      case 'Moldova': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_moldova.png'; break; }
      case 'Monaco': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_monaco.png'; break; }
      case 'Mongolia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_mongolia.png'; break; }
      case 'Montenegro': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_montenegro.png'; break; }
      case 'Montserrat': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_montserrat.png'; break; }
      case 'Morocco': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_morocco.png'; break; }
      case 'Mozambique': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_mozambique.png'; break; }
      case 'Myanmar': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_myanmar.png'; break; }
      case 'Namibia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_namibia.png'; break; }
      case 'Nauru': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_nauru.png'; break; }
      case 'Nepal': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_nepal.png'; break; }
      case 'The Netherlands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_netherlands.png'; break; }
      case 'New Zealand': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_new_zealand.png'; break; }
      case 'Nicaragua': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_nicaragua.png'; break; }
      case 'Niger': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_niger.png'; break; }
      case 'Nigeria': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_nigeria.png'; break; }
      case 'Niue': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_niue.png'; break; }
      case 'Norfolk Island': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_norfolk_island.png'; break; }
      case 'Northern Mariana Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_northern_marianas_islands.png'; break; }
      case 'North Korea': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_north_korea.png'; break; }
      case 'Norway': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_norway.png'; break; }
      case 'Oman': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_oman.png'; break; }
      case 'Pakistan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_pakistan.png'; break; }
      case 'Palau': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_palau.png'; break; }
      case 'Palestine': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_palestine.png'; break; }
      case 'Panama': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_panama.png'; break; }
      case 'Papua New Guinea': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_papua_new_guinea.png'; break; }
      case 'Paraguay': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_paraguay.png'; break; }
      case 'Peru': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_peru.png'; break; }
      case 'Philippines': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_philippines.png'; break; }
      case 'Pitcairn': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_pitcairn_islands.png'; break; }
      case 'Portugal': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_portugal.png'; break; }
      case 'Puerto Rico': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_puerto-rico.png'; break; }
      case 'Qatar': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_qatar.png'; break; }
      case 'Macedonia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_republic_of_macedonia.png'; break; }
      case 'Poland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_republic_of_poland.png'; break; }
      case 'Romania': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_romania.png'; break; }
      case 'Russia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_russia.png'; break; }
      case 'Rwanda': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_rwanda.png'; break; }
      case 'Saint Kitts and Nevis': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_saint_kitts_and_nevis.png'; break; }
      case 'El Salvador': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_salvador.png'; break; }
      case 'Samoa': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_samoa.png'; break; }
      case 'San Marino': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_san_marino.png'; break; }
      case 'Sao Tome and Principe': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_sao_tome_and_principe.png'; break; }
      case 'Saudi Arabia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_saudi_arabia.png'; break; }
      case 'Scotland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_scotland.png'; break; }
      case 'Senegal': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_senegal.png'; break; }
      case 'Serbia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_serbia.png'; break; }
      case 'Seychelles': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_seychelles.png'; break; }
      case 'Sierra Leone': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_sierra_leone.png'; break; }
      case 'Singapore': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_singapore.png'; break; }
      case 'Sint Maarten (Dutch Part)': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_sint_maarten.png'; break; }
      case 'Slovakia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_slovakia.png'; break; }
      case 'Slovenia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_slovenia.png'; break; }
      case 'Solomon Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_solomon_islands.png'; break; }
      case 'Somalia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_somalia.png'; break; }
      case 'Somaliland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_somaliland.png'; break; }
      case 'South Africa': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_south_africa.png'; break; }
      case 'South Korea': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_south_korea.png'; break; }
      case 'South Sudan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_south_sudan.png'; break; }
      case 'Spain': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_spain.png'; break; }
      case 'Sri Lanka': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_sri_lanka.png'; break; }
      case 'Saint Bartholemy': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_st_barts.png'; break; }
      case 'Saint Lucia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_st_lucia.png'; break; }
      case 'Saint Vincent and the Grenadines': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_st_vincent_and_the_grenadines.png'; break; }
      case 'Sudan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_sudan.png'; break; }
      case 'Suriname': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_suriname.png'; break; }
      case 'Swaziland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_swaziland.png'; break; }
      case 'Sweden': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_sweden.png'; break; }
      case 'Switzerland': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_switzerland.png'; break; }
      case 'Syria': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_syria.png'; break; }
      case 'Taiwan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_taiwan.png'; break; }
      case 'Tajikistan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tajikistan.png'; break; }
      case 'Tanzania': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tanzania.png'; break; }
      case 'Thailand': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_thailand.png'; break; }
      case 'Tibet': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tibet.png'; break; }
      case 'Togo': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_togo.png'; break; }
      case 'Tokelau': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tokelau.png'; break; }
      case 'Tonga': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tonga.png'; break; }
      case 'Trinidad and Tobago': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_trinidad_and_tobago.png'; break; }
      case 'Tunisia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tunisia.png'; break; }
      case 'Turkey': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_turkey.png'; break; }
      case 'Turkmenistan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_turkmenistan.png'; break; }
      case 'Turks and Caicos Islands': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_turks_and_caicos.png'; break; }
      case 'Tuvalu': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_tuvalu.png'; break; }
      case 'Uganda': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_uganda.png'; break; }
      case 'Ukraine': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_ukraine.png'; break; }
      case 'United Arab Emirates': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_united_arab_emirates.png'; break; }
      case 'United Kingdom': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_united_kingdom.png'; break; }
      case 'United Nations': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_united_nations.png'; break; }
      case 'United States of America': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_united_states_of_america.png'; break; }
      case 'Uruguay': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_uruguay.png'; break; }
      case 'Uzbekistan': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_uzbekistn.png'; break; }
      case 'Vanuatu': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_vanuatu.png'; break; }
      case 'Vatican': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_vatican_city.png'; break; }
      case 'Venezuela': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_venezuela.png'; break; }
      case 'Vietnam': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_vietnam.png'; break; }
      case 'Virgin Islands (U.S.)': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_virgin_islands.png'; break; }
      case 'Wales': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_wales.png'; break; }
      case 'Western Sahara': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_western_sahara.png'; break; }
      case 'Yemen': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_yemen.png'; break; }
      case 'Zambia': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_zambia.png'; break; }
      case 'Zimbabwe': { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_zimbabwe.png'; break; }
      default: { this.flagIconPath = 'assets/Icons/Resized_Flags/flag_united_nations.png'; break; }

    }
  }
}

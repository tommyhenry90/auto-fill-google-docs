var inclusions = {
  data: {
    supply_mav: false,
    supply_wingman: false,
    services_project_engineering: false,
    product_documentation: true,
    services_mav_deployment: false,
    services_mav_transport: false,
    supply_modules: false,
    supply_inverter: false,
    supply_dc_equipment: false,
    services_dc_works: false,
    supply_ac_equipment: false,
    services_ac_works: false,
    services_site_study: false,
    other_works: false
  },
  text: {
    supply_mav: "MAV supply\n     Labour & Materials - to integrate Modules into MAVs\n     MAV DC Electrical - stringing to the corner of each MAV\n     Deployment Kit - levelling pads, turnbuckles, anchors",
    supply_wingman: "Wingman supply\n     Labour & Materials - to integrate Inverters into WINGMANs",
    services_project_engineering: "5B Project engineering",
    product_documentation: "Product Documentation",
    services_mav_deployment: "MAV deployment",
    services_mav_transport: "MAV transport (DAP)",
    supply_modules: "Modules supply",
    supply_inverter: "Inverter supply",
    supply_dc_equipment: "DC equipment supply - from the MAVs to the inverters",
    services_dc_works: "DC electrical work",
    supply_ac_equipment: "AC equipment supply",
    services_ac_works: "AC electrical work",
    services_site_study: "Site specific studies",
    other_works: "Other works\n     Planning applications or development approvals\n     Site preparation, earthwork, civil work\n     General site management, amenities, securities, fencing\n     Grid connection application and work\n     Testing and commissioning\n     Operation and maintenance"
  }
}
  
var timelineMappings = {
  sheet : "Firm Inputs",
  data : {
    "<engineering_start>": 'D133',
    "<procurement_start>": 'D134',
    "<assembly_start>": 'D135',
    "<transport_start>": 'D136',
    "<deployment_start>": 'D137',
    "<elec_work_start>": 'D138',
    "<commissioning_start>": 'D139',
    "<engineering_duration>": 'E133',
    "<procurement_duration>": 'E134',
    "<assembly_duration>": 'E135',
    "<transport_duration>": 'E136',
    "<deployment_duration>": 'E137',
    "<elec_work_duration>": 'E138',
    "<commissioning_duration>": 'E139',
    "<engineering_end>": 'F133',
    "<procurement_end>": 'F134',
    "<assembly_end>": 'F135',
    "<transport_end>": 'F136',
    "<deployment_end>": 'F137',
    "<elec_work_end>": 'F138',
    "<commissioning_end>": 'F139'
  }
}

var costMappings = {
  sheet: "Project Inputs",
  data: {
    "<mav_supply_cost>": 'C25',
    "<wingman_supply_cost>": 'C26',
    "<module_supply_cost>": 'C27',
    "<inverter_supply_cost>": 'C28',
    "<dc_supply_cost>": 'C29',
    "<ac_supply_cost>": 'C30',
    "<total_products_cost>": 'C31',
    "<deployment_cost>": 'H25',
    "<transport_cost>": 'H26',
    "<engineering_cost>": 'H27',
    "<site_study_cost>": 'H28',
    "<dc_work_cost>": 'H29',
    "<ac_work_cost>": 'H30',
    "<total_services_cost>": 'H31',
    "<total_cost>": 'C32',
    "<mav_supply_watt>": 'D25',
    "<wingman_supply_watt>": 'D26',
    "<module_supply_watt>": 'D27',
    "<inverter_supply_watt>": 'D28',
    "<dc_supply_watt>": 'D29',
    "<ac_supply_watt>": 'D30',
    "<total_products_watt>": 'D31',
    "<deployment_watt>": 'I25',
    "<transport_watt>": 'I26',
    "<engineering_watt>": 'I27',
    "<site_study_watt>": 'I28',
    "<dc_work_watt>": 'I29',
    "<ac_work_watt>": 'I30',
    "<total_services_watt>": 'I31',
    "<total_cost_watt>": 'D32'
  }
}

var paymentTermsMappings = {
  sheet: "Firm Inputs",
  data: {
    "<first_percentage>": 'H84',
    "<second_percentage>": 'H85',
    "<third_percentage>": 'H86',
    "<total_percentage>": 'H90',
    "<first_dollars>": 'I84',
    "<second_dollars>": 'I85',
    "<third_dollars>": 'I86',
    "<total_dollars>": 'G90'
  }
}

var projectVariables = [
  "project_name",
  "project_number",
  "date_po_expected",
  "project_city",
  "project_state",
  "project_country",
  "power_dc_total",
  "power_ac_total",
  "wind_region",
  "mav_type",
  "num_mavs",
  "module_name",
  "module_power",
  "num_modules",
  "inverter_name",
  "inverter_power",
  "num_inverters",
  "num_wingman",
  "company_name",
  "contact_name",
  "contact_email"
];
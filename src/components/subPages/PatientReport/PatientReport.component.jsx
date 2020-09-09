// Import: Dependencies
import React from "react";

// Import: Styling
import "./PatientReport.styles.scss";

// Import: UI
import SubPageField from "../../UI/subPageComponents/SubPageField/SubPageField.component";
import HeadingOne from "../../UI/subPageComponents/HeadingOne/HeadingOne.component";
import HeadingTwo from "../../UI/subPageComponents/HeadingTwo/HeadingTwo.component";
import HeadingThree from "../../UI/subPageComponents/HeadingThree/HeadingThree.component";
import ReportContainer from "../../UI/ReportContainer/ReportContainer.component";

// subPage: PatientReport
function PatientReport({
  selectedPatient,
  patientDetailsData, // Patient Details
  nokData, // Next of Kin
  specialistPathwaysData, // Specialist Pathways
  majorTraumaData, // Major Trauma
  manchesterTriageSystemData, // Manchester Triage System
  pathfindersData, // Pathfinders
  jointDecisionMakingData, // Joint Decision Making
  cardiacChestPainData, // Cardiac Chest Pain
  strokeAssessmentData, // Stroke Assessment
  cardiacArrestData, // Cardiac Arrest
  patientIVData, // Patient IV Access
  drugsMedsData, // Drugs/Meds
  skeletalTraumaData, // Skeletal Trauma
  burnsData, // Burns
  transportOptionsData, // Transport Options
  airwaysManagementData, // Airways Management
}) {
  //#region patientDetailsRender = Patient Details report
  const patientDetailsRender = patientDetailsData.map(
    ({
      Master_ePR_ID,
      PD_Firstname,
      PD_Surname,
      PD_DOB,
      PD_Age_Yrs,
      PD_Age_Mths,
      PD_Gender,
      PD_NHS_No,
      PD_Ethnicity,
      PD_Weight,
      PD_Telephone,
      PD_Housenum,
      PD_Add1,
      PD_Add2,
      PD_Add3,
      PD_Postcode,
      PD_Patient_Allergy,
      PD_Allergy,
      PD_Patient_Meds,
      PD_Medication,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Patient Details" />
            <SubPageField
              fieldTitle="Forename"
              fieldData={PD_Firstname ? PD_Firstname : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Surname"
              fieldData={PD_Surname ? PD_Surname : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Date of Birth"
              fieldData={PD_DOB ? PD_DOB : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Age (Years)"
              fieldData={PD_Age_Yrs ? PD_Age_Yrs : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Age (Months)"
              fieldData={PD_Age_Mths ? PD_Age_Mths : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Gender"
              fieldData={PD_Gender ? PD_Gender : "Not recorded"}
            />
            <SubPageField
              fieldTitle="NHS Number"
              fieldData={PD_NHS_No ? PD_NHS_No : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Ethnicity"
              fieldData={PD_Ethnicity ? PD_Ethnicity : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Weight (kg)"
              fieldData={PD_Weight ? PD_Weight : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Telephone"
              fieldData={PD_Telephone ? PD_Telephone : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Address"
              fieldData={
                PD_Housenum || PD_Add1 || PD_Add2 || PD_Add3 || PD_Postcode ? (
                  <div>
                    {PD_Housenum}
                    {PD_Add1}
                    {PD_Add2}
                    {PD_Add3}
                    {PD_Postcode}
                  </div>
                ) : (
                  "Not recorded"
                )
              }
            />
            <SubPageField
              fieldTitle="Does the Patient have allergies?"
              fieldData={
                PD_Patient_Allergy ? PD_Patient_Allergy : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Allergies"
              fieldData={PD_Allergy ? PD_Allergy : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Does the Patient take medication?"
              fieldData={PD_Patient_Meds ? PD_Patient_Meds : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Medications"
              fieldData={PD_Medication ? PD_Medication : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /patientDetailsRender = Patient Details report

  //#region nokRender = Next of Kin report
  const nokRender = nokData.map(
    ({
      Master_ePR_ID,
      NoK_Forename,
      NoK_Surname,
      NoK_Relation,
      NoK_Contact,
      GPName,
      GPAddressLine1,
      GPAddressLine2,
      GPAddressLine3,
      GPAddressLine4,
      GPPostcode,
      GPName_Other,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Next of Kin" />
            <SubPageField
              fieldTitle="Forename"
              fieldData={NoK_Forename ? NoK_Forename : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Surname"
              fieldData={NoK_Surname ? NoK_Surname : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Relationship to Patient"
              fieldData={NoK_Relation ? NoK_Relation : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Contact Number"
              fieldData={NoK_Contact ? NoK_Contact : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingTwo text="Patient GP" />
            <SubPageField
              fieldTitle="GP Surgery Name"
              fieldData={GPName ? GPName : "Not recorded"}
            />
            <SubPageField
              fieldTitle="GP Surgery Address"
              fieldData={
                GPAddressLine1 ||
                GPAddressLine2 ||
                GPAddressLine3 ||
                GPAddressLine4 ||
                GPPostcode ? (
                  <div>
                    {GPAddressLine1}
                    {GPAddressLine2}
                    {GPAddressLine3}
                    {GPAddressLine4}
                    {GPPostcode}
                  </div>
                ) : (
                  "Not recorded"
                )
              }
            />
            <SubPageField
              fieldTitle="Other"
              fieldData={GPName_Other ? GPName_Other : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /nokRender = Next of Kin report

  //#region specialistPathwaysRender = Specialist Pathways Assessment report
  const specialistPathwaysRender = specialistPathwaysData.map(
    ({
      Master_ePR_ID,
      Pathway_Refusal,
      Pathway_NotApplicable,
      SP_Specialist_Path,
      Safeguarding_Concern,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Specialist Pathways Assessment" />
            <SubPageField
              fieldTitle="Pathway Used"
              fieldData={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Pathway Not Applicable"
              fieldData={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Specialist Pathway"
              fieldData={
                SP_Specialist_Path ? SP_Specialist_Path : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Are there any indications that lead to a safeguarding concern?"
              fieldData={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /specialistPathwaysRender = Specialist Pathways Assessment report

  //#region majorTraumaRender = Major Trauma report
  const majorTraumaRender = majorTraumaData.map(
    ({
      Master_ePR_ID,
      Pathway_Refusal,
      Pathway_NotApplicable,
      MajorTrauma_Pathfinder,
      MJDiscriminator,
      MJOutcome,
      Safeguarding_Concern,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Major Trauma" />
            <SubPageField
              fieldTitle="Pathway Used"
              fieldData={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Pathway Not Applicable"
              fieldData={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Major Trauma Pathfinder"
              fieldData={
                MajorTrauma_Pathfinder ? MajorTrauma_Pathfinder : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Discriminator"
              fieldData={MJDiscriminator ? MJDiscriminator : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Outcome"
              fieldData={MJOutcome ? MJOutcome : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Are there any indications that lead to a safeguarding concern?"
              fieldData={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /majorTraumaRender = Major Trauma report

  //#region manchesterTriageSystemRender = Manchester Triage System report
  const manchesterTriageSystemRender = manchesterTriageSystemData.map(
    ({
      Master_ePR_ID,
      Pathway_Refusal,
      Pathway_NotAvailable,
      Pathway_NotApplicable,
      MTS_Card,
      MTS_Discriminator,
      Outcome_RAB,
      Outcome_Code,
      Safeguarding_Concern,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Manchester Triage System" />
            <SubPageField
              fieldTitle="Pathway Used"
              fieldData={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Not Qualified To"
              fieldData={
                Pathway_NotAvailable ? Pathway_NotAvailable : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Pathway Not Applicable"
              fieldData={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="MTS Card"
              fieldData={MTS_Card ? MTS_Card : "Not recorded"}
            />
            <SubPageField
              fieldTitle="MTS Discriminator"
              fieldData={MTS_Discriminator ? MTS_Discriminator : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Outcome Colour"
              fieldData={Outcome_RAB ? Outcome_RAB : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Outcome Code"
              fieldData={Outcome_Code ? Outcome_Code : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Are there any indications that lead to a safeguarding concern?"
              fieldData={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /manchesterTriageSystemRender = Manchester Triage System report

  //#region pathfindersRender = Pathfinders report
  const pathfindersRender = pathfindersData.map(
    ({
      Master_ePR_ID,
      Pathway_Refusal,
      Pathway_NotApplicable,
      Pathway_Exclude,
      Pathfinder_Medical,
      Medical_Discriminator,
      Pathfinder_Trauma,
      Trauma_Discriminator,
      Pathfinder_Outcome,
      Safeguarding_Concern,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Pathfinders" />
            <SubPageField
              fieldTitle="Pathway Used"
              fieldData={Pathway_Refusal ? Pathway_Refusal : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Pathway Not Applicable"
              fieldData={
                Pathway_NotApplicable ? Pathway_NotApplicable : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Pathfinder Excluded" />
            <SubPageField
              fieldTitle="Exclusion Reason"
              fieldData={Pathway_Exclude ? Pathway_Exclude : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Medical Pathfinder"
              fieldData={
                Pathfinder_Medical ? Pathfinder_Medical : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Pathfinder Discriminator"
              fieldData={
                Medical_Discriminator ? Medical_Discriminator : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Trauma Pathfinder"
              fieldData={Pathfinder_Trauma ? Pathfinder_Trauma : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Pathfinder Discriminator"
              fieldData={
                Trauma_Discriminator ? Trauma_Discriminator : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Pathfinder Outcome"
              fieldData={
                Pathfinder_Outcome ? Pathfinder_Outcome : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Are there any indications that lead to a safeguarding concern?"
              fieldData={
                Safeguarding_Concern ? Safeguarding_Concern : "Not recorded"
              }
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /pathfindersRender = Pathfinders report

  //#region jointDecisionMakingRender = Joint Decision Making report
  const jointDecisionMakingRender = jointDecisionMakingData.map(
    ({
      Master_ePR_ID,
      ActionTaken,
      TraumaCellAdvice,
      ClinicalSupportAdvice,
      ClinicalSupportNotes,
      OtherAdvice,
      AdviceFrom,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Action Taken"
              fieldData={ActionTaken ? ActionTaken : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Trauma Cell"
              fieldData={TraumaCellAdvice ? TraumaCellAdvice : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Clinical Hub"
              fieldData={
                ClinicalSupportAdvice ? ClinicalSupportAdvice : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Note"
              fieldData={
                ClinicalSupportNotes ? ClinicalSupportNotes : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Other (Please State)"
              fieldData={OtherAdvice ? OtherAdvice : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Advice Given By"
              fieldData={AdviceFrom ? AdviceFrom : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /jointDecisionMakingRender = Joint Decision Making report

  //#region cardiacChestPainRender = Cardiac Chest Pain report
  const cardiacChestPainRender = cardiacChestPainData.map(
    ({
      Master_ePR_ID,
      Time_Obtained,
      Four_Rhythm,
      Twelve_Rhythm,
      ECG_Other,
      STEMI,
      Referred_To_PCI,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Cardiac Chest Pain" />
            <SubPageField
              fieldTitle="Time"
              fieldData={Time_Obtained ? Time_Obtained : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="4 Rhythm"
              fieldData={Four_Rhythm ? Four_Rhythm : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="12 Rhythm"
              fieldData={Twelve_Rhythm ? Twelve_Rhythm : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Other Rhythm"
              fieldData={ECG_Other ? ECG_Other : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="STEMI"
              fieldData={STEMI ? STEMI : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Referred to Primary PCI"
              fieldData={Referred_To_PCI ? Referred_To_PCI : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /cardiacChestPainRender = Cardiac Chest Pain report

  //#region strokeAssessmentRender = Stroke Assessment report
  const strokeAssessmentRender = strokeAssessmentData.map(
    ({
      Master_ePR_ID,
      SI_Suspected,
      SI_TIA,
      BM_Recorded,
      Referred_Acute,
      FAST_Positive,
      SI_Face,
      Face_Box,
      SI_Arms,
      Arms_Box,
      SI_Speech,
      Onset_Time,
      Last_Time,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingTwo text="Stroke Assessment" />
            <HeadingThree text="Condition" />
            <SubPageField
              fieldTitle="Suspected Stroke"
              fieldData={SI_Suspected ? SI_Suspected : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Suspected TIA"
              fieldData={SI_TIA ? SI_TIA : "Not recorded"}
            />
            <SubPageField
              fieldTitle="BM Recorded"
              fieldData={BM_Recorded ? BM_Recorded : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Referred to Hyper-Accute"
              fieldData={Referred_Acute ? Referred_Acute : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Fast Assessment" />
            <SubPageField
              fieldTitle="Fast Positive on Assessment"
              fieldData={FAST_Positive ? FAST_Positive : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Face"
              fieldData={SI_Face ? SI_Face : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Arms"
              fieldData={SI_Arms ? SI_Arms : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Speech"
              fieldData={SI_Speech ? SI_Speech : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Side (Face)"
              fieldData={Face_Box ? Face_Box : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Side(Arms)"
              fieldData={Arms_Box ? Arms_Box : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Witnessed Onset"
              fieldData={Onset_Time ? Onset_Time : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Last time seen well"
              fieldData={Last_Time ? Last_Time : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /strokeAssessmentRender = Stroke Assessment report

  //#region cardiacArrestRender = Cardiac Arrest report
  const cardiacArrestRender = cardiacArrestData.map(
    ({
      Master_ePR_ID,
      Resus_Attempted,
      Bystander_CPR,
      Time_Compression_Started,
      Public_AED,
      Time_of_First_Shock,
      First_Monitored_Rhythm,
      NWAS_Shocked,
      Time_of_First_NWAS_Shock,
      ROSC_Present_at_Handover,
      Time_of_ROSC,
      Time_of_sub_ROSC,
      Termination_of_Resus,
      No_of_Shocks,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Resus Attempted"
              fieldData={Resus_Attempted ? Resus_Attempted : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Bystander CPR"
              fieldData={Bystander_CPR ? Bystander_CPR : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time Compressions Started"
              fieldData={
                Time_Compression_Started
                  ? Time_Compression_Started
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Public AED"
              fieldData={Public_AED ? Public_AED : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time of First Public AED Shock"
              fieldData={
                Time_of_First_Shock ? Time_of_First_Shock : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="First Monitored Rhythm"
              fieldData={
                First_Monitored_Rhythm ? First_Monitored_Rhythm : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="NWAS Shocks"
              fieldData={NWAS_Shocked ? NWAS_Shocked : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time of First NWAS Shock"
              fieldData={
                Time_of_First_NWAS_Shock
                  ? Time_of_First_NWAS_Shock
                  : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="ROSC Present at Handover"
              fieldData={
                ROSC_Present_at_Handover
                  ? ROSC_Present_at_Handover
                  : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Time of First ROSC"
              fieldData={Time_of_ROSC ? Time_of_ROSC : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time of Subsequent ROSCs"
              fieldData={Time_of_sub_ROSC ? Time_of_sub_ROSC : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Termination of Resus"
              fieldData={
                Termination_of_Resus ? Termination_of_Resus : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Total No. of Shocks"
              fieldData={No_of_Shocks ? No_of_Shocks : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /cardiacArrestRender = Cardiac Arrest report

  //#region patientIVAccessRender = Patient IV Access report
  const patientIVAccessRender = patientIVData.map(
    ({
      Master_ePR_ID,
      IV_ID,
      IV_Size,
      IV_Site,
      IV_Successful,
      IV_Flushed,
      IV_Non_Touch,
      IV_Attempts,
      IV_By,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Type"
              fieldData={IV_ID ? IV_ID : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Size"
              fieldData={IV_Size ? IV_Size : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Site"
              fieldData={IV_Site ? IV_Site : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Successful"
              fieldData={IV_Successful ? IV_Successful : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Flushed"
              fieldData={IV_Flushed ? IV_Flushed : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Non-touch Technique"
              fieldData={IV_Non_Touch ? IV_Non_Touch : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Attempts"
              fieldData={IV_Attempts ? IV_Attempts : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="By"
              fieldData={IV_By ? IV_By : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /patientIVAccessRender = Patient IV Access report

  //#region patientIVRefusalRender = Patient IV Refusal report
  const patientIVRefusalRender = patientIVData.map(
    ({ Master_ePR_ID, IV_Type_Refusal, IV_By_Refusal }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Type"
              fieldData={IV_Type_Refusal ? IV_Type_Refusal : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="By"
              fieldData={IV_By_Refusal ? IV_By_Refusal : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /patientIVRefusalRender = Patient IV Refusal report

  //#region drugsMedsRender = Drugs/Meds report
  const drugsMedsRender = drugsMedsData.map(
    ({
      Master_ePR_ID,
      Name,
      Pouch,
      Time,
      Dosage,
      Unit,
      Route,
      By,
      Own_Meds,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Drug"
              fieldData={Name ? Name : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Pouch No."
              fieldData={Pouch ? Pouch : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Time"
              fieldData={Time ? Time : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Dosage"
              fieldData={Dosage ? Dosage : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Unit"
              fieldData={Unit ? Unit : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Route"
              fieldData={Route ? Route : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="By"
              fieldData={By ? By : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Own Medications"
              fieldData={Own_Meds ? Own_Meds : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /drugsMedsRender = Drugs/Meds report

  //#region drugsMedsRefusalRender = Drugs Refusal report
  const drugsMedsRefusalRender = drugsMedsData.map(
    ({ Master_ePR_ID, Drug_Refusal, Drug_By_Refusal }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Type"
              fieldData={Drug_Refusal ? Drug_Refusal : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="By"
              fieldData={Drug_By_Refusal ? Drug_By_Refusal : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /drugsMedsRefusalRender = Drugs Refusal report

  //#region skeletalTraumaRender = Skeletal Trauma report
  const skeletalTraumaRender = skeletalTraumaData.map(
    ({ Master_ePR_ID, ST_Type, ST_Site, ST_Side, ST_Area, ST_Time, ST_By }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Type"
              fieldData={ST_Type ? ST_Type : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Site"
              fieldData={ST_Site ? ST_Site : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Side"
              fieldData={ST_Side ? ST_Side : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Area"
              fieldData={ST_Area ? ST_Area : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Time"
              fieldData={ST_Time ? ST_Time : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="By"
              fieldData={ST_By ? ST_By : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /skeletalTraumaRender = Skeletal Trauma report

  //#region burnsRender = Burns report
  const burnsRender = burnsData.map(
    ({
      Master_ePR_ID,
      TotalBox,
      t_Head,
      HeadBox,
      Head_Dressing_Time,
      Head_Cooling_Time,
      t_Torso,
      TorsoBox,
      Torso_Dressing_Time,
      Torso_Cooling_Time,
      t_Limbs,
      LimbsBox,
      Limbs_Dressing_Time,
      Limbs_Cooling_Time,
    }) => (
      <div key={Master_ePR_ID}>
        <SubPageField
          fieldTitle="Total &#37;"
          fieldData={TotalBox ? TotalBox : "Not recorded"}
        />
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingThree text="Head" />
            <SubPageField
              fieldTitle="Thickness"
              fieldData={t_Head ? t_Head : "Not recorded"}
            />
            <SubPageField
              fieldTitle="&#37; Area"
              fieldData={HeadBox ? HeadBox : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time Dressing Applied"
              fieldData={
                Head_Dressing_Time ? Head_Dressing_Time : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Time Cooling Applied"
              fieldData={Head_Cooling_Time ? Head_Cooling_Time : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Torso" />
            <SubPageField
              fieldTitle="Thickness"
              fieldData={t_Torso ? t_Torso : "Not recorded"}
            />
            <SubPageField
              fieldTitle="&#37; Area"
              fieldData={TorsoBox ? TorsoBox : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time Dressing Applied"
              fieldData={
                Torso_Dressing_Time ? Torso_Dressing_Time : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Time Cooling Applied"
              fieldData={
                Torso_Cooling_Time ? Torso_Cooling_Time : "Not recorded"
              }
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Limbs" />
            <SubPageField
              fieldTitle="Thickness"
              fieldData={t_Limbs ? t_Limbs : "Not recorded"}
            />
            <SubPageField
              fieldTitle="&#37; Area"
              fieldData={LimbsBox ? LimbsBox : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Time Dressing Applied"
              fieldData={
                Limbs_Dressing_Time ? Limbs_Dressing_Time : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Time Cooling Applied"
              fieldData={
                Limbs_Cooling_Time ? Limbs_Cooling_Time : "Not recorded"
              }
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /burnsRender = Burns report

  //#region transportOptionsRender = Transport Options report
  const transportOptionsRender = transportOptionsData.map(
    ({
      Master_ePR_ID,
      DestinationName,
      WardName,
      OtherLocation,
      Pre_Alert,
      PreAlert_RAG,
      NonTransportReason,
      Other,
      Scene_Mobility,
      Amb_Mobility,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <SubPageField
              fieldTitle="Receiving Location"
              fieldData={DestinationName ? DestinationName : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Destination Name"
              fieldData={WardName ? WardName : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Other Location"
              fieldData={OtherLocation ? OtherLocation : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Hospital Pre-Alert" />
            <SubPageField
              fieldTitle="Pre-Alert"
              fieldData={Pre_Alert ? Pre_Alert : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Status"
              fieldData={PreAlert_RAG ? PreAlert_RAG : "Not recorded"}
            />
            <HeadingThree text="Non-Transport" paddingTop="1rem" />
            <SubPageField
              fieldTitle="Reason"
              fieldData={
                NonTransportReason ? NonTransportReason : "Not recorded"
              }
            />
            <SubPageField
              fieldTitle="Other"
              fieldData={Other ? Other : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Patients Mobility" />
            <SubPageField
              fieldTitle="Scene to Ambulance"
              fieldData={Scene_Mobility ? Scene_Mobility : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Ambulance to Hospital"
              fieldData={Amb_Mobility ? Amb_Mobility : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /transportOptionsRender = Transport Options report

  //#region airwaysManagementRender = Airways Management report
  const airwaysManagementRender = airwaysManagementData.map(
    ({
      Master_ePR_ID,
      BVM,
      NPA_Size,
      NPA_By,
      OPA_Size,
      OPA_By,
      LMA_Size,
      LMA_By,
      ET_Size,
      ET_By,
      GradeOfView,
      SurgicalCric_By,
      Suction_By,
      Thoracostomy_By,
    }) => (
      <div key={Master_ePR_ID}>
        <div className="PatientReport__container">
          <div className="PatientReport__report-col">
            <HeadingThree text="Bag Value Mask" />
            <SubPageField
              fieldTitle="Size"
              fieldData={BVM ? BVM : "Not recorded"}
            />
            <HeadingThree text="Nasopharyngeal Airway" paddingTop="1rem" />
            <SubPageField
              fieldTitle="Size"
              fieldData={NPA_Size ? NPA_Size : "Not recorded"}
            />
            <SubPageField
              fieldTitle="By"
              fieldData={NPA_By ? NPA_By : "Not recorded"}
            />
            <HeadingThree text="Oropharyngeal Airway" paddingTop="1rem" />
            <SubPageField
              fieldTitle="Size"
              fieldData={OPA_Size ? OPA_Size : "Not recorded"}
            />
            <SubPageField
              fieldTitle="By"
              fieldData={OPA_By ? OPA_By : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Supraglottic Airway" />
            <SubPageField
              fieldTitle="Size"
              fieldData={LMA_Size ? LMA_Size : "Not recorded"}
            />
            <SubPageField
              fieldTitle="By"
              fieldData={LMA_By ? LMA_By : "Not recorded"}
            />
            <HeadingThree text="Endotracheal" paddingTop="1rem" />
            <SubPageField
              fieldTitle="Size"
              fieldData={ET_Size ? ET_Size : "Not recorded"}
            />
            <SubPageField
              fieldTitle="By"
              fieldData={ET_By ? ET_By : "Not recorded"}
            />
            <SubPageField
              fieldTitle="Grade of View"
              fieldData={GradeOfView ? GradeOfView : "Not recorded"}
            />
          </div>
          <div className="PatientReport__report-col">
            <HeadingThree text="Surgical Cric." />
            <SubPageField
              fieldTitle="By"
              fieldData={SurgicalCric_By ? SurgicalCric_By : "Not recorded"}
            />
            <HeadingThree text="Suction" paddingTop="1rem" />
            <SubPageField
              fieldTitle="By"
              fieldData={Suction_By ? Suction_By : "Not recorded"}
            />
            <HeadingThree text="Thoracostomy" paddingTop="1rem" />
            <SubPageField
              fieldTitle="By"
              fieldData={Thoracostomy_By ? Thoracostomy_By : "Not recorded"}
            />
          </div>
        </div>
      </div>
    )
  );
  //#endregion /airwaysManagementRender = Airways Management report

  // Render PatientReport code
  return (
    <div className="PatientReport">
      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Patient Details" />
        {selectedPatient === null ? null : (
          <>
            {selectedPatient === null ? null : patientDetailsRender}
            {selectedPatient === null ? null : nokRender}
          </>
        )}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne
          icon="fas fa-file-medical-alt"
          text="Triage and Pathfinder Support"
        />
        {selectedPatient === null ? null : (
          <>
            {selectedPatient === null ? null : specialistPathwaysRender}
            {selectedPatient === null ? null : majorTraumaRender}
            {selectedPatient === null ? null : manchesterTriageSystemRender}
            {selectedPatient === null ? null : pathfindersRender}
            <HeadingTwo text="Joint Decision Making" />
            {selectedPatient === null ? null : jointDecisionMakingRender}
          </>
        )}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne
          icon="fas fa-file-medical-alt"
          text="Cardiovascular Assessment"
        />
        {selectedPatient === null ? null : (
          <>
            {selectedPatient === null ? null : cardiacChestPainRender}
            {selectedPatient === null ? null : strokeAssessmentRender}
          </>
        )}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Cardiac Arrest" />
        {selectedPatient === null ? null : cardiacArrestRender}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne
          icon="fas fa-file-medical-alt"
          text="IV Access and Medications"
        />
        {selectedPatient === null ? null : (
          <>
            <HeadingTwo text="IV Access" />
            {selectedPatient === null ? null : patientIVAccessRender}
            <HeadingTwo text="IV Refusal" />
            {selectedPatient === null ? null : patientIVRefusalRender}
            <HeadingTwo text="Drugs / Meds" />
            {selectedPatient === null ? null : drugsMedsRender}
            <HeadingTwo text="Drugs Refusal" />
            {selectedPatient === null ? null : drugsMedsRefusalRender}
          </>
        )}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Trauma Management" />
        {selectedPatient === null ? null : (
          <>
            <HeadingTwo text="Skeletal Trauma" />
            {selectedPatient === null ? null : skeletalTraumaRender}
            <HeadingTwo text="Burns" />
            {selectedPatient === null ? null : burnsRender}
          </>
        )}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Transport Options" />
        {selectedPatient === null ? null : transportOptionsRender}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne
          icon="fas fa-file-medical-alt"
          text="Communications, Consent and Notifications"
        />
      </ReportContainer>

      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Airways Management" />
        {selectedPatient === null ? null : airwaysManagementRender}
      </ReportContainer>

      <ReportContainer>
        <HeadingOne
          icon="fas fa-file-medical-alt"
          text="Clinical Observations"
        />
      </ReportContainer>

      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Capacity to Consent" />
      </ReportContainer>

      <ReportContainer>
        <HeadingOne icon="fas fa-file-medical-alt" text="Sign and Sync" />
      </ReportContainer>
    </div>
  );
}

// Export: PatientReport
export default PatientReport;

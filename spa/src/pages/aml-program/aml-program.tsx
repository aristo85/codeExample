import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';
// styled components
import {
  Root,
  ProgramParagraph,
  ProgramList,
  ProgramListItem,
  ProgramTitle,
  ProgramListItemLink,
} from './aml-program.styled';

function AmlProgram() {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout title={t('PAGES.AML_PROGRAM_TITLE')}>
        <Root>
          <ProgramTitle>
            Our company follows the Money Laundering and Terrorist Financing
            Prevention Act of Estonia, obligations mentioned of the EU 6th AML
            directive, FAATF recommendations, applicable sanctions lists.
          </ProgramTitle>
          <ProgramParagraph>
            COMPANY GROUP, as a responsible market subject, is constantly
            monitoring the behaviour of its customers to identify and prevent
            possible money laundering, terrorism financing, guns proliferation
            and fraud.
          </ProgramParagraph>
          <ProgramParagraph>
            All employees and managers of COMPANY GROUP (hereinafter COMPANY
            GROUP) are fully prepared to detect suspicious activities and inform
            the responsible department. When joining the company, every employee
            receives a training session which helps to understand why being
            responsible for the prevention of illicit financial activities is so
            important and how it affects everyone on this global personally in a
            negative way.
          </ProgramParagraph>
          <ProgramTitle>1.1. Clients acceptance.</ProgramTitle>
          <ProgramList>
            <ProgramParagraph>
              COMPANY GROUP follows adequate customer identification procedures
              to verify its identity and avoid identity theft, document
              falsification or sanctioned nationals from using its services.
              This is why, when onboarding a new client digitally, we ask every
              customer to provide us with:
            </ProgramParagraph>
            <ProgramListItem>
              1.1. Proof of identification (such as a good quality photo of a
              valid, non-expired passport or ID card, where all corners and
              edges of the document are visible)
            </ProgramListItem>
            <ProgramListItem>
              1.2. We verify an individual or representing persons by using face
              control (we ask to take a good quality moment selfie or a video)
            </ProgramListItem>
            <ProgramListItem>
              1.3. We request entities to submit company incorporation and
              shareholders documents to identify Ultimate Beneficiary Owners
              (UBOs)
            </ProgramListItem>
            <ProgramListItem>
              1.4. We take a legal right to screen natural and legal individuals
              against sanctions and adverse media checks
            </ProgramListItem>
            <ProgramListItem>
              1.5. We identify PEPs related applications and might take a legal
              right to reject such profiles if there are reasons to it
              (minimizing the risks of corruption and tax avoidance)
            </ProgramListItem>
            <ProgramListItem>
              1.6. The verification rules apply to all business relationships
              and transactions with customers in COMPANY GROUP`s business
              activities to prevent the establishment of business relationships
              and transactions with anonymous or unidentified persons and to
              ensure compliance with other statutory requirements for the
              prevention of money laundering and terrorist financing.
            </ProgramListItem>
          </ProgramList>
          <ProgramTitle>2. Definitions</ProgramTitle>
          <ProgramList>
            <ProgramListItem>
              2.1. Money laundering means: a) the conversion or transfer of
              property derived from criminal activity or property obtained
              instead of such property, knowing that such property is derived
              from criminal activity or from an act of participation in such
              activity, for the purpose of concealing or disguising the illicit
              origin of the property or of assisting any person who is involved
              in the commission of such an activity to evade the legal
              consequences of that person`s actions or b) the acquisition,
              possession or use of property derived from criminal activity or
              property obtained instead of such property, knowing, at the time
              of receipt, that such property was derived from criminal activity
              or from an act of participation therein or c) the concealment or
              disguise of the true nature, source, location, disposition,
              movement, rights with respect to, or ownership of, property
              derived from criminal activity or property obtained instead of
              such property, knowing that such property is derived from criminal
              activity or from an act of participation in such an activity.
              Money laundering also means participation in, association to
              commit, attempts to commit and aiding, abetting, facilitating and
              counselling the commission of any of the aforementioned
              activities.
            </ProgramListItem>
            <ProgramListItem>
              2.2. Business activity is the service provided by COMPANY GROUP of
              virtual currency, exchange of Fiat currency for virtual currency
              and exchange of one virtual currency for another.
            </ProgramListItem>
            <ProgramListItem>
              2.3. Terrorism financing means the financing and supporting of an
              act of terrorism and commissioning thereof as well as making funds
              available or raising them, knowing that they may be used, in whole
              or in part, to commit an act of terrorism. The acts described in
              §§ 237, 2371 and 2372 of the Penal Code are considered criminal
              offenses.
            </ProgramListItem>
            <ProgramListItem>
              2.4. Beneficial owner means a natural person who, taking advantage
              of their influence, makes a transaction, act, action, operation or
              step or otherwise exercises control over a transaction, act,
              action, operation or step or over another person and in whose
              interests or favour or on whose account a transaction or act,
              action, operation or step is made. In the case of companies, a
              beneficial owner is the natural person who ultimately owns or
              controls a legal person through direct or indirect ownership of a
              sufficient percentage of the shares or voting rights or ownership
              interest in that person, including through bearer shareholdings,
              or through control via other means. Where, after all possible
              means of identification have been exhausted, the person cannot be
              identified and there is no doubt that such person exists or where
              there are doubts as to whether the identified person is a
              beneficial owner, the natural person who holds the position of a
              senior managing official is deemed as a beneficial owner.
            </ProgramListItem>
            <ProgramListItem>
              2.5. Politically exposed person means a natural person who is or
              who has been entrusted with prominent public functions including a
              head of State, head of government, minister and deputy or
              assistant minister; a member of parliament or of a similar
              legislative body, a member of a governing body of a political
              party, a member of a supreme court, a member of a court of
              auditors or of the board of a central bank; an ambassador, a
              chargé d`affaires and a high-ranking officer in the armed forces;
              a member of an administrative, management or supervisory body of a
              State-owned enterprise; a director, deputy director and member of
              the board or equivalent function of an international organisation,
              except middle-ranking or more junior officials. As well as a
              family member of a politically exposed person - the spouse, or a
              person considered to be equivalent to a spouse, of a politically
              exposed person or local politically exposed person; a child and
              their spouse, or a person considered to be equivalent to a spouse,
              of a politically exposed person or local politically exposed
              person; a parent of a politically exposed person or local
              politically exposed person. As well as a person known to be a
              close associate of the politically exposed person - natural person
              who is known to be the beneficial owner or to have joint
              beneficial ownership of a legal person or a legal arrangement, or
              any other close business relations, with a politically exposed
              person or a local politically exposed person; and a natural person
              who has sole beneficial ownership of a legal entity or legal
              arrangement which is known to have been set up for the de facto
              benefit of a politically exposed person or local politically
              exposed person.
            </ProgramListItem>

            <ProgramListItem>
              2.6. A contact person of the Financial Intelligence Unit is an
              employee appointed by the decision of the management board, who is
              the contact person of the Financial Intelligence Unit and
              regulates and controls the implementation of the measures
              established for the prevention of money laundering and terrorist
              financing. The contact person can only be a person who has the
              necessary education, professional suitability, necessary
              abilities, personal qualities and experience and an impeccable
              reputation to perform the duties of the contact person. COMPANY
              GROUP shall ensure that the contact person has the necessary
              competence, resources and access to relevant information to
              perform the tasks set out in the Money Laundering and Terrorist
              Financing Prevention Act. COMPANY GROUP shall notify the Financial
              Intelligence Unit of the appointment of the contact person and
              coordinate his/her suitability for the respective tasks.
            </ProgramListItem>
            <ProgramListItem>
              2.7. The Financial Intelligence Unit (FIU) is an independent
              structural unit of the Police and Border Guard Board, which
              exercises supervision and applies the enforcement powers of the
              state on the basis and pursuant to the procedure prescribed by
              law. Postal address Tööstuse 52, 10416 Tallinn, e-mail{' '}
              <ProgramListItemLink href='mailto:rahapesu@politsei.ee'>
                rahapesu@politsei.ee
              </ProgramListItemLink>
              .
            </ProgramListItem>
            <ProgramListItem>
              2.8. Money Laundering and Terrorist Financing Prevention Act is a
              law governing COMPANY GROUP`s activities in the field of money
              laundering and terrorist financing. In the event of any conflict
              with these internal rules, the requirements set out in the Money
              Laundering and Terrorist Financing Prevention Act shall apply.
            </ProgramListItem>
            <ProgramListItem>
              2.9. With regard to terms not defined in these internal rules,
              COMPANY GROUP proceeds from the definitions and their meanings
              provided for in § 3 of the Money Laundering and Terrorist
              Financing Prevention Act (hereinafter the Money Laundering Act).
            </ProgramListItem>
          </ProgramList>
          <ProgramTitle>3.2. Supervisor and reporting.</ProgramTitle>
          <ProgramList>
            <ProgramListItem>
              3.1. COMPANY GROUP OU is responsible to inform the Supervisory
              Authority of Estonia about illicit financial activities that
              happened or intended to happen using its`services.
            </ProgramListItem>
            <ProgramListItem>
              3.2. COMPANY GROUP OU is responsible to screen all individuals and
              entities through various global sanctions lists to ensure its
              clients are transparent and not added to the blocked nationals
              lists or should not be using financial activities within the
              territory where COMPANY GROUP provides services.
            </ProgramListItem>
            <ProgramListItem>
              *For the reasons, mentioned above, COMPANY GROUP OU has a right,
              in very rare exceptional cases, to block the transaction during
              the investigation period, or if higher authorities decided so.
            </ProgramListItem>
            <ProgramListItem>
              3.3. The Financial Intelligence Unit (FIU) is an independent
              structural unit of the Police and Border Guard Board, which
              exercises supervision and applies the enforcement powers of the
              state on the basis and according to the procedure prescribed by
              law. Postal address Tööstuse 52, 10416 Tallinn, e-mail{' '}
              <ProgramListItemLink href='mailto:rahapesu@politsei.ee'>
                rahapesu@politsei.ee
              </ProgramListItemLink>
              .
            </ProgramListItem>
          </ProgramList>
          <ProgramTitle>
            4. External Suspicious Activities Reporting:
          </ProgramTitle>
          <ProgramList>
            <ProgramListItem>
              4.1.If you have noticed possible suspicious activity which could
              be occurring using COMPANY GROUP services, do not hesitate to
              report it to our AML Compliance department by submitting a
              freestyle letter to an email address ______
            </ProgramListItem>
            <ProgramListItem>
              4.2. Please add these details to your suspicious activity report,
              if known:
              <ul>
                <ProgramListItem>
                  <strong>- What happened</strong>
                </ProgramListItem>
                <ProgramListItem>
                  <strong>- When happened</strong>
                </ProgramListItem>
                <ProgramListItem>
                  <strong>- Amount and currency</strong>
                </ProgramListItem>
                <ProgramListItem>
                  <strong>- Reference number of transfer</strong>
                </ProgramListItem>
                <ProgramListItem>
                  <strong>
                    - Why you suspect it (e.g. a URL link as proof)
                  </strong>
                </ProgramListItem>
              </ul>
            </ProgramListItem>
            <ProgramListItem>
              4.3. Our AML Compliance department will investigate each SAR
              received and will provide feedback.
            </ProgramListItem>
          </ProgramList>
        </Root>
      </PageLayout>
    </div>
  );
}

export default AmlProgram;

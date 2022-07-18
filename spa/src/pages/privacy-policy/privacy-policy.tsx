import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';
// styled components
import {
  Root,
  ProgramTitle,
  ProgramParagraph,
  ProgramList,
  ProgramListItem,
} from './privacy-policy.styled';

function PrivacyPolicy() {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout title={t('PAGES.PRIVACY_POLICY_TITLE')}>
        <Root>
          <ProgramTitle>Introduction</ProgramTitle>
          <ProgramParagraph>
            This Privacy Notice sets out key information regarding Company and
            how any personal data you provide to us will be processed,
            collected, used and disclosed.
          </ProgramParagraph>
          <ProgramParagraph>
            This notice also informs you about:
          </ProgramParagraph>
          <ProgramList>
            <ProgramListItem>
              What kind of personal data we collect and process;
            </ProgramListItem>
            <ProgramListItem>
              How we will handle and look after your personal data;
            </ProgramListItem>
            <ProgramListItem>
              Company obligations in regard to processing your personal data
              responsibly and security;
            </ProgramListItem>
            <ProgramListItem>
              Your data protection rights as data subject;
            </ProgramListItem>
            <ProgramListItem>
              How the law protects your personal data.
            </ProgramListItem>
          </ProgramList>
          <ProgramTitle>Name and Address of the Controller</ProgramTitle>
          <ProgramParagraph>
            Company Group – is the controller and is responsible for your
            personal Data, _______ limited liability company organized and
            existing under the laws of the Republic of Estonia, company
            code_____, having its registered office ________________ Email:
            info@_______
          </ProgramParagraph>
          <ProgramTitle>Minors</ProgramTitle>
          <ProgramParagraph>
            The website is not intended for minors and we do not collect
            personal data relating to minors.
          </ProgramParagraph>
          <ProgramParagraph>
            If Company recognize that Company have collected Personal Data from
            a child, Company will delete that information as quickly as
            possible. If you suppose that a child under 13 may have provided us
            Personal data, please contact us at our email.
          </ProgramParagraph>

          <ProgramTitle>Personal Data We Collect</ProgramTitle>
          <ProgramParagraph>
            We may collect information about you when you visit our website or
            use our services.
          </ProgramParagraph>
          <ProgramParagraph>
            When you register to use our services by establishing an account, we
            will collect the follow information for individuals and entities:
          </ProgramParagraph>
          <ProgramTitle>Individuals:</ProgramTitle>
          <ProgramList>
            <ProgramListItem>
              First name, Last name, DOB, country information, email address,
              and telephone number – it is a first step of KYC procedures.
            </ProgramListItem>
            <ProgramListItem>
              As you continue to use our services, you should verify your
              account, for this purpose, we will require:
            </ProgramListItem>
            <ProgramListItem>
              a copy of your government-issued ID (passport etc.);
            </ProgramListItem>
            <ProgramListItem>
              proof of residence (g. utility bill);
            </ProgramListItem>
            <ProgramListItem>PEP database checks;</ProgramListItem>
            <ProgramListItem>
              proof of residence (g. utility bill) in some cases;
            </ProgramListItem>
            <ProgramListItem>
              for the purpose of verifying your identity and AML/KYC due
              diligence
            </ProgramListItem>
            <ProgramListItem>
              Video identification procedure, which involves making a recording
              of your physical appearance.
            </ProgramListItem>
          </ProgramList>

          <ProgramTitle>Entities:</ProgramTitle>
          <ProgramList>
            <ProgramListItem>
              Name, registration number, legal form (type), address, date of
              incorporation, and existence (on the verification date).
            </ProgramListItem>
            <ProgramListItem>
              Information for the KYC/AML check (at least full name and email
              address) of the stakeholders including beneficial owners,
              shareholders, directors, etc.
            </ProgramListItem>
            <ProgramListItem>
              Corporate documents required under the local laws, e.g. articles,
              the certificate of incorporation/certificate of registration or
              certificate of incumbency, valid excerpt from the public companies
              registry, certificate of good standing etc.
            </ProgramListItem>
            <ProgramListItem>
              The documents confirming beneficial ownership, e.g. the registry
              of shareholders.
            </ProgramListItem>
            <ProgramListItem>
              Video identification procedure, which involves making a recording
              of your physical appearance.
            </ProgramListItem>
          </ProgramList>
          <ProgramParagraph>
            he lawful bases for collecting and processing this personal data are
            the performance of our contract with you, and our legal obligation
            to comply with the Regulation (EU) 2015/847 and Money Laundering and
            Terrorist Financing Prevention Act of Estonia.
          </ProgramParagraph>
          <ProgramTitle>Transaction Information</ProgramTitle>
          <ProgramParagraph>
            When you use our services, access our website to make crypto
            currencies exchange, we collect personal data about the parties to
            the transaction, which may include some or all of the following:
            bank card information (card number, CVC or CVV, card expire date,
            card holder Name and Surname) amounts sent and received, amounts
            paid for services.
          </ProgramParagraph>
          <ProgramParagraph>
            Transaction Data includes also details about:
          </ProgramParagraph>
          <ProgramList>
            <ProgramListItem>
              the type of virtual financial assets involved, the order volume,
              price, value;
            </ProgramListItem>
            <ProgramListItem>
              your virtual currency exchanging records;
            </ProgramListItem>
            <ProgramListItem>
              transaction history on the Platform, including withdrawals and
              virtual and fiat currency exchanging;
            </ProgramListItem>
            <ProgramListItem>
              amounts credited to your account and your account balances.
            </ProgramListItem>
          </ProgramList>
          <ProgramParagraph>
            The lawful bases for collecting and processing this personal data
            are the performance of our contract with you according to Regulation
            (EU) 2016/679 Art.6 (1) (b) and our legal obligation to comply with
            the Regulation (EU) 2015/847 and Money Laundering and Terrorist
            Financing Prevention Act of Estonia.
          </ProgramParagraph>
          <ProgramTitle>Logging in to our website</ProgramTitle>
          <ProgramParagraph>
            If you have registered for an account, we collect:
          </ProgramParagraph>
          <ProgramParagraph>
            Technical/LOG Data includes the IP address, your login data to the
            Platform (username and password), device type, browser type, time
            zone setting and location, and other technology on the devices you
            use to access the Site and Platform. This also includes information
            about your use of the Services, including the type of browser you
            use, access times, pages viewed, your IP address, and the page you
            visited before navigating to our Services.
          </ProgramParagraph>
          <ProgramParagraph>
            Device Data includes information about the computer or mobile device
            you use to access our Services, including the hardware model,
            operating system and version, unique device identifiers, and mobile
            network information.
          </ProgramParagraph>
          <ProgramParagraph>
            We will keep records for periods of 10 (Ten) years after Company
            Account will be closed.
          </ProgramParagraph>
          <ProgramParagraph>
            The collection and processing of this information is necessary for
            contract performance and our compliance with legal obligations
            according to Regulation (EU) 2015/847 and Money Laundering and
            Terrorist Financing Prevention Act of Estonia.
          </ProgramParagraph>
          <ProgramTitle>When You Visit Our Website</ProgramTitle>
          <ProgramParagraph>
            Information collected by cookies and other similar technologies – we
            use various technologies to collect information which may include
            saving cookies to users computers.
          </ProgramParagraph>
          <ProgramParagraph>
            First party cookies – collected by Company website.
          </ProgramParagraph>
          <ProgramParagraph>
            The purpose of collecting first party cookies is to remember
            information about you, such as your language preference or login
            information.
          </ProgramParagraph>
          <ProgramParagraph>
            The lawful basis for collecting and processing this personal data is
            based on our legitimate interest to ensure network and information
            security according to Regulation (EU) 2016/679 Art.6 (1) (f)
          </ProgramParagraph>
          <ProgramParagraph>
            Third party cookies - collected by the Company`s website.
          </ProgramParagraph>
          <ProgramTitle>Profiling</ProgramTitle>
          <ProgramParagraph>
            We are required by the Anti Money Laundering and Counter Terrorism
            Financing regulations of the Estonia and EU to take appropriate
            steps to identify and assess the risks of money laundering and
            terrorist financing to which our company may be subject and take an
            informed decision on whether we want to enter into a customer
            relationship with you, and, if positive, to conduct initial and
            ongoing screening and monitoring.
          </ProgramParagraph>
          <ProgramParagraph>
            During such risk assessment, we must consider various factors
            relating to a customer and relevant transactions, including the
            customer`s location and behavior, his or her being/connection to
            Politically Exposed or Special Interest Persons, certain types of
            transactions, etc.
          </ProgramParagraph>
          <ProgramParagraph>
            If a significant risk is identified, we may take such measures as
            freeze the Company Account, stop the transaction, terminate our
            contract with the customer, or inform the Estonian Financial
            Intelligence Unit.
          </ProgramParagraph>
          <ProgramParagraph>
            No automated decision-making is involved in the assessment.
          </ProgramParagraph>
          <ProgramTitle>How we share information with others</ProgramTitle>
          <ProgramParagraph>
            We do not rent or sell your Personal Data to anyone.
          </ProgramParagraph>
          <ProgramParagraph>
            Your personal data will be transmitted to third parties that we use
            to provide our services; these parties have been rigorously assessed
            and offer a guarantee of compliance with the legislation on the
            processing of personal data. These parties have been designated as
            data processors and carry out their activities according to the
            instructions given by us and under our control.
          </ProgramParagraph>
          <ProgramParagraph>
            The third parties in question belong to the following categories:
            banking and payment operators, internet providers, companies
            specializing in IT and SMS services; companies that carry out
            KYC/AML database checks and fraud database checks.
          </ProgramParagraph>
          <ProgramParagraph>
            We may also be required to share your personal data with various
            financial institutions and/or enforcement or court authorities to
            comply with Anti-Money Laundering, Terrorist Financing and Transfer
            of Funds laws, prevent fraud, enforce an agreement we have with you,
            or protect our rights, property or safety, or the rights, property
            or safety of our employees or others.
          </ProgramParagraph>
          <ProgramParagraph>
            Additionally, we may reveal your personal data to third parties:
          </ProgramParagraph>
          {/* <ProgramListItem></ProgramListItem>
          <ProgramList></ProgramList> */}
          <ProgramParagraph>
            1. if you request or authorize it;
          </ProgramParagraph>
          <ProgramParagraph>
            2. to address emergencies or acts of God;
          </ProgramParagraph>
          <ProgramParagraph>
            3. to address disputes, claims, or to persons demonstrating legal
            authority to act on your behalf.
          </ProgramParagraph>
          <ProgramParagraph>Your Rights</ProgramParagraph>
          <ProgramParagraph>
            The European Union`s General Data Protection Regulation and other
            countriesprivacy laws provide certain rights for data subjects.
          </ProgramParagraph>
          <ProgramParagraph>
            If you wish to confirm that Company is processing your personal
            data, or to have access to the personal data it may have about you,
            please contact us at info@_______ the purpose of the processing;
          </ProgramParagraph>
          <ProgramParagraph>
            1. the categories of personal data concerned;
          </ProgramParagraph>
          <ProgramParagraph>
            2. who we share your personal data with;
          </ProgramParagraph>
          <ProgramParagraph>
            3. what the source of the data was (if you didn`t provide it
            directly to us);
          </ProgramParagraph>
          <ProgramParagraph>4. how long it will be stored.</ProgramParagraph>
          <ProgramTitle>Your rights:</ProgramTitle>
          <ProgramParagraph>
            You have a right to correct (rectify) the record of your personal
            data maintained by Company if it is inaccurate. It is imperative
            that the personal data we hold about you is accurate and current at
            all times. Otherwise, this will impair our ability to provide you
            with the availability of our service. Please keep us informed if
            your personal data changes during our relationship with us.
          </ProgramParagraph>
          <ProgramParagraph>
            You may request that we erase that data or cease processing it,
            subject to certain exceptions.
          </ProgramParagraph>
          <ProgramParagraph>
            In many countries, you have a right to lodge a complaint with the
            appropriate data protection authority if you have concerns about how
            we process your personal data.
          </ProgramParagraph>
          <ProgramParagraph>
            When technically feasible, we will—at your request—provide your
            personal data to you or transmit it directly to another controller,
            subject to certain exceptions.
          </ProgramParagraph>
          <ProgramParagraph>
            Object to processing of your personal data where we are relying on a
            legitimate interest (or those of a third party) and there is
            something about your particular situation which makes you want to
            object to processing on this ground as you feel it impacts on your
            fundamental rights and freedoms. You also have the right to object
            where we are processing your personal data for direct marketing
            purposes. In some cases, we may demonstrate that we have compelling
            legitimate grounds to process your information which overrides your
            rights and freedoms.
          </ProgramParagraph>
          <ProgramParagraph>
            Request restriction of processing of your personal data. This
            enables you to ask us to suspend the processing of your personal
            data in the following scenarios:
          </ProgramParagraph>
          <ProgramParagraph>
            1. if you want us to establish the data`s accuracy;
          </ProgramParagraph>
          <ProgramParagraph>
            2. where our use of the data is unlawful but you do not want us to
            erase it;
          </ProgramParagraph>
          <ProgramParagraph>
            3. where you need us to hold the data even if we no longer require
            it as you need it to establish, exercise, or defend legal claims;
          </ProgramParagraph>
          <ProgramParagraph>
            4. you have objected to our use of your data but we need to verify
            whether we have overriding legitimate grounds to use it.
          </ProgramParagraph>
          <ProgramParagraph>
            Reasonable access to your personal data will be provided at no cost
            upon request made to Company at info@______. If access cannot be
            provided within a reasonable time frame, we will provide you with a
            date when the information will be provided. If for some reason
            access is denied, we will provide an explanation as to why access
            has been denied.
          </ProgramParagraph>
          <ProgramTitle>Security of Your Information</ProgramTitle>
          <ProgramParagraph>
            To help protect the privacy of personal data you transmit through
            the use of our website, we maintain physical, technical, and
            administrative safeguards. We update and test our security
            technology on an ongoing basis. We restrict access to your personal
            data to those employees who need to know that information to provide
            services to you. In addition, we train our employees about the
            importance of confidentiality and maintaining the privacy and
            security of your data. We commit to taking appropriate disciplinary
            measures to enforce our employee`s privacy responsibilities.
          </ProgramParagraph>
          <ProgramTitle>Data Storage and Retention</ProgramTitle>
          <ProgramParagraph>
            In case of records relating to Customer Due Diligence measures and
            financial transaction records required by Anti Money Laundering and
            Counter-Terrorism Financing regulations of the EU, we keep such
            information for a minimum of five years from the date of the
            termination of your relationship with us (which would typically
            arise from the closure/de-registration of your account on the
            Platform), but no longer than ten years.
          </ProgramParagraph>
          <ProgramTitle>
            Third Parties or Publicly Available Sources
          </ProgramTitle>
          <ProgramParagraph>
            We may also obtain information from other sources and combine that
            with information we collect through our Services. For example, we
            may collect information about you from third parties, including but
            not limited to social media platforms and publicly available
            sources.
          </ProgramParagraph>
          <ProgramParagraph>
            We may also receive personal data about you from various third
            parties and public sources: Identity, Contact, AML / KYC Data from
            publicly available sources such as public court documents, the RoC
            and the company houses and registers of other jurisdictions, and
            from electronic data searches, online KYC search tools (which may be
            subscription or license-based), anti-fraud databases and other third
            party databases, sanctions lists, outsourced third-party KYC
            providers and from general searches carried out via online search
            engines (e.g. Google).
          </ProgramParagraph>
          <ProgramTitle>Third-Party Links</ProgramTitle>
          <ProgramParagraph>
            Our Site may include links to third-party websites, plug-ins, and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do
            not control these third-party websites and are not responsible for
            their privacy notices, statements or policies.
          </ProgramParagraph>
          <ProgramParagraph>
            We encourage you to read the Privacy Policy of every website you
            visit.
          </ProgramParagraph>
          <ProgramTitle>Changes and Updates to the Privacy Policy</ProgramTitle>
          <ProgramParagraph>
            As our organization and services change from time to time, this
            Privacy Policy is expected to change as well. We reserve the right
            to amend it at any time, for any reason, without notice to you,
            other than the posting of the amended Privacy Policy on this site.
            We may email periodic reminders of our notices and terms and
            conditions and will email users of material changes thereto, but you
            should check our Site frequently to see the current Privacy Policy
            that is in effect and any changes that may have been made to it. The
            provisions contained herein supersede all previous notices or
            statements regarding our privacy practices and the terms and
            conditions that govern the use of this site.
          </ProgramParagraph>
          <ProgramParagraph>
            By using Company`s website and services, you agree to the terms and
            conditions contained in this Privacy Policy and any other agreement
            we might have with you. If you do not agree to any of these terms
            and conditions, you should not use this site or any Company
            services.
          </ProgramParagraph>
        </Root>
      </PageLayout>
    </div>
  );
}

export default PrivacyPolicy;

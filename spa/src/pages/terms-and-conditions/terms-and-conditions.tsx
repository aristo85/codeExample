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
  // ProgramList,
  // ProgramListItem,
} from './terms-and-conditions.styled';

function TermsAndConditions() {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout title={t('PAGES.TERMS_AND_CONDITIONS_TITLE')}>
        <Root>
          <ProgramTitle>1. COMMON PROVISIONS</ProgramTitle>
          <ProgramParagraph>
            1.1. The present Agreement is concluded between COMPANY Group
            (hereinafter called as COMPANY) and the Client (hereinafter called
            as Client) and determines the main terms and conditions between
            Client and COMPANY when Client registers in the system and opens a
            virtual currency wallet and/or uses the other services provided by
            COMPANY.
          </ProgramParagraph>
          <ProgramParagraph>
            1.2. It is very important for Client to read and understand this
            General Terms and Conditions (hereinafter called T&C) before accept
            this document. T&C contains limitation on the scope of COMPANY
            obligations to Client, as well as the limitations and exemptions
            from COMPANY liability to Client, in case of any damage, that Client
            may suffer, as the result of online money transfer. Please read
            instructions in the payment order carefully.
          </ProgramParagraph>
          <ProgramParagraph>
            1.3. Addendums to the Agreement are Agreements, under which Client
            and COMPANY agree on the usage of respective services specified in
            the addendums. Conditions set in the addendums are special
            provisions which prevail over other provisions of the Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            1.4. It is Client`s responsibility to understand and comply with all
            the laws, rules and regulations that are relevant to Client`s
            jurisdiction (place of residence) and that may apply in connection
            to Client use of the service. Please, consider seeking legal advice
            if you are not comfortable with your personal understanding of the
            terms and conditions in this Agreement. Consider all aspects of this
            Agreement, the Polices and relevant laws and regulations when
            choosing to use the service at any time. Certain jurisdictional
            limitations that could apply to Client may include but not limited
            to, foreign currency conversation, import or export of certain goods
            and/or services, duties, taxes and customs.
          </ProgramParagraph>
          <ProgramParagraph>
            1.5. If you do not agree to be bound by the terms and conditions of
            this Agreement or the Privacy Policy, you must not use or access the
            COMPANY site or use or access any of COMPANY services
          </ProgramParagraph>
          <ProgramTitle>1.6. Key points and Definitions:</ProgramTitle>
          <ProgramParagraph>
            - Agreement – means the General Terms and Conditions Agreement,
            including all subsequent amendments and any additional documentation
            that accompanies it and to which Clients should adhere to;
          </ProgramParagraph>
          <ProgramParagraph>
            - Account – means a result of registration in the COMPANY system,
            during which personal data of the registered Client is saved, a
            login name is assigned and the rights of the Client in the system
            are defined;
          </ProgramParagraph>
          <ProgramParagraph>
            - External Account – means any financial account or virtual wallet
            account, from/to the Client load Fiat or Virtual currency into/from
            COMPANY Account/COMPANY Wallet.
          </ProgramParagraph>
          <ProgramParagraph>
            - COMPANY Group `we`, `us` or `our` in this Agreement - is a
            licensed virtual currency wallet service provider, limited liability
            company organized and existing under the laws of the___________ ,
            company code__________, having its registered
            office________________;
          </ProgramParagraph>
          <ProgramParagraph>
            - Company System – COMPANY Group is the proprietor of the COMPANY
            system/platform;
          </ProgramParagraph>
          <ProgramParagraph>
            - Business day/Working day – means a day (other than Saturday,
            Sunday or public/bank holiday) on which supporting banks where the
            services are provided are open for business;
          </ProgramParagraph>
          <ProgramParagraph>
            - Client - `you` or `your` in this Agreement - a person or entity
            that registered an account in the COMPANY system, holds this
            account;
          </ProgramParagraph>
          <ProgramParagraph>
            - Party/Parties – means COMPANY and/or Client;
          </ProgramParagraph>
          <ProgramParagraph>
            - Commission fee – means any fees and tariffs and charges that may
            be charged by COMPANY and which are available on COMPANY website (as
            amended from time to time);
          </ProgramParagraph>
          <ProgramParagraph>
            - Services –. the service of exchanging a virtual currency against a
            fiat currency and virtual currency wallet;
          </ProgramParagraph>
          <ProgramParagraph>
            - Monthly Fee has the meaning of the amount of funds payable by
            Client to COMPANY each month for the use of COMPANY Services.
            Monthly Fee is calculated against the payment plan assigned to
            Client;
          </ProgramParagraph>
          <ProgramParagraph>
            - Password (passwords) – any code of Client created in the system or
            provided to the Client by COMPANY for the access to the COMPANY
            account or initiation and/or management of separate services
            provided by COMPANY and/or initiation, authorization,
            implementation, confirmation and reception of payment operations;
          </ProgramParagraph>
          <ProgramParagraph>
            - Personal data – any information related to the natural (private)
            person who`s identity is known or can be directly or indirectly
            determined by using personal code (national ID number) and one or
            more physical, physiological, psychological, economic, cultural or
            social features specific to the individual;
          </ProgramParagraph>
          <ProgramParagraph>
            - Statement – a document prepared and provided by COMPANY, which
            includes information about payment operations executed during the
            specific period of time;
          </ProgramParagraph>
          <ProgramTitle>
            2. CREATING AND MAINTANCE THE ACCOUNT IN COMPANY SYSTEM
          </ProgramTitle>
          <ProgramParagraph>
            2.1. This Agreement regulates the opening, the usage and the close
            an Account in the Company System, and execution of transaction in
            relation to the Client`s COMPANY Account. COMPANY is a licensed
            virtual currency wallet service provider that enables you to store,
            track, transfer, and manage your balances of certain supported
            virtual currencies The COMPANY Account is an electronic money
            account which enables to send and to receive electronic payments.
            Under the present Agreement, a COMPANY Account is opened for Client
            for an indefinite period of time.
          </ProgramParagraph>
          <ProgramParagraph>
            2.2. COMPANY provides the following services on the website:
          </ProgramParagraph>
          <ProgramParagraph>
            - Exchange of Virtual Currency unit for units of another Virtual
            Currency/fiat money;
          </ProgramParagraph>
          <ProgramParagraph>
            - Virtual Currency wallet services;
          </ProgramParagraph>
          <ProgramParagraph>
            - Depositing and withdrawing units of Virtual Currency on the
            Platform;
          </ProgramParagraph>
          <ProgramParagraph>
            2.3. In order to open the COMPANY account, Client needs to be at
            least 18 years old.
          </ProgramParagraph>
          <ProgramParagraph>
            2.4. The Client shall confirm that:
          </ProgramParagraph>
          <ProgramParagraph>
            -incoming virtual and/or fiat currency transferred to his/her
            COMPANY Account is not received from illegal activity;
          </ProgramParagraph>
          <ProgramParagraph>
            - the Client will not use services provided by COMPANY for any
            illegal purposes, including the Client`s commitment not to perform
            any actions and operations to legalize money received for criminal
            or illegal activity.
          </ProgramParagraph>
          <ProgramParagraph>
            2.5. If virtual and/or fiat currency is credited to the Client`s
            COMPANY account by mistake or in other ways under no legal basis,
            COMPANY has the right and the Client gives an irrevocable consent in
            such cases to deduct the currency from the Client`s COMPANY Account
            without Client`s order. If the amount of currency on the Client`s
            COMPANY Account is insufficient to debit the currency credited by
            mistake, the Client unconditionally commits to repaying COMPANY the
            currency credited by mistake in 3 (three) business days from receipt
            of the request from COMPANY. If Client notices that virtual and/or
            fiat currency that does not belong to him/her has been transferred
            to his/her COMPANY Account, s/he shall immediately inform COMPANY
            thereof. Client has no right to manage currency credited by a
            mistake, which does not belong to him/her.
          </ProgramParagraph>
          <ProgramParagraph>
            2.6. COMPANY will process virtual currency transactions in
            accordance with the instructions COMPANY receives from Client. Prior
            to submitting instructions to COMPANY, Client should verify all
            transaction information. COMPANY do not guarantee the identity of
            any recipient, user, requestee or other party. Client cannot reverse
            a virtual currency transaction once it has been broadcast to the
            relevant virtual currency network. Submission of the order in the
            System is Client`s agreement to carry out the transaction and cannot
            be canceled. If Client has reached a certain limit on COMPANY
            account (COMPANY may define the limit at its own discretion), Client
            must follow the steps that COMPANY will notify Client of.
          </ProgramParagraph>
          <ProgramParagraph>
            2.7. If Client has an insufficient amount of Funds in COMPANY
            Account to complete an order via the Services, COMPANY cancel the
            entire order.
          </ProgramParagraph>
          <ProgramParagraph>
            2.8. Client may only open one Account unless COMPANY explicitly
            approves the opening of additional accounts. If due to inaccurate
            data Client has created several accounts, he/she shall inform
            immediately COMPANY about it, so that all created accounts would be
            merged into one account. In case of a breach of this provision,
            Client may be blocked, illegal operations invalidated and the
            information transmitted to law enforcement institutions, if
            necessary.
          </ProgramParagraph>
          <ProgramParagraph>
            2.9. Client may only open an Account if it is legal to do so in
            his/her country of residence. By opening the Account Client
            represents and warrants to COMPANY that Client`s opening of the
            Account does not violate any laws or regulations applicable to
            Client. Client shall pay COMPANY the amount of any losses of COMPANY
            incur in connection with Client`s breach of this section.
          </ProgramParagraph>
          <ProgramParagraph>
            2.10. The Agreement shall enter into force and become valid
            indefinitely when Client has been registered in the system,
            introduced to the terms and conditions of the Agreement and
            expressed its consent to comply with its terms and conditions.
          </ProgramParagraph>
          <ProgramParagraph>
            2.11. The Client`s registration in the system is a confirmation of
            the Client`s consent with the terms of the Agreement and undertakes
            to adhere to them. By registering in the system, Client confirms
            that ihe/she holds full legal capacity necessary to establish legal
            relationship.
          </ProgramParagraph>
          <ProgramParagraph>
            2.12. The electronic money on a COMPANY Account belongs to the
            person or legal entity which is registered as the COMPANY Account
            holder. No person other than the COMPANY Account holder has any
            rights in relation to the funds held in a COMPANY Account, except in
            cases of succession. You may not assign or transfer your COMPANY
            Account to a third party or otherwise grant any third party a legal
            or equitable interest over it.
          </ProgramParagraph>
          <ProgramParagraph>
            2.13. All information Client provides during the signup process or
            any time thereafter must be accurate and truthful. Client must
            ensure that the information recorded on the Account is always
            accurate and up to date and COMPANY shall not be liable for any loss
            arising out of Client`s failure to do so. COMPANY may ask Client at
            any time to confirm the accuracy of the information or to provide
            documents or other evidence.
          </ProgramParagraph>
          <ProgramParagraph>
            2.14. COMPANY does not provide Services in the following cases:
          </ProgramParagraph>
          <ProgramParagraph>
            - in countries, subject to financial sanctions imposed by the
            Estonia and according to FATF recommendations;
          </ProgramParagraph>
          <ProgramParagraph>
            - Client is a resident of any country where we do not provide the
            Service. A list of non-serviced countries may be amended by COMPANY
            from time to time, without notice;
          </ProgramParagraph>
          <ProgramParagraph>
            - Client has previously been suspended or removed from using our
            Services;
          </ProgramParagraph>
          <ProgramParagraph>
            - Client has full power and authority to enter into this Agreement
            and doing so he/she will violate any other Agreement to which you
            are a party;
          </ProgramParagraph>
          <ProgramParagraph>
            - will not use COMPANY Services if any applicable laws in Client`s
            country prohibit from doing so in accordance with this Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            2.15. COMPANY may contact Client by e-mail or in other ways with
            information or notices regarding Client`s Account. It is Client`s
            responsibility to regularly check the proper functioning of Client`s
            e­mail account or other methods of communication that Client has
            registered with the Account and to retrieve and read messages
            relating to the Account promptly. COMPANY shall not be liable for
            any loss arising out of Client`s failure to do so.
          </ProgramParagraph>
          <ProgramParagraph>
            Under circumstances and procedures set out in the Agreement or in
            the System, COMPANY shall perform Client`s identification in order
            to start or continue provision of Services.
          </ProgramParagraph>
          <ProgramParagraph>
            For Client account opening as an Individual COMPANY asks to provide:
          </ProgramParagraph>
          <ProgramParagraph>
            - First name, Last name, DOB, country information, email address,
            and telephone number – it is a first step of KYC procedures.
          </ProgramParagraph>
          <ProgramParagraph>
            As you continue to use our services, you should verify your account,
            for this purpose, we will require:
          </ProgramParagraph>
          <ProgramParagraph>
            - a copy of your government-issued ID (passport etc.). Passport, ID
            card or driving license, expiry date should be more than one month.;
          </ProgramParagraph>
          <ProgramParagraph>
            - proof of residence (g. utility bill) For proof of address the
            following documents can be submitted: the bill from Internet service
            provider, the company supplying gas/ electricity, mobile services
            (the submitted documents should be no more than three months old on
            the date of application and should show the name and current address
            of Client) Documents that can be used as proof of address for EU
            citizens: household utility bill (eg gas, electric, water or fixed
            line telephone, mobile phone bill, bank, building society or credit
            card statement, solicitor`s letter confirming recent house purchase
            or land registry confirmation (in this case, proof of previous
            address will also be needed);
          </ProgramParagraph>
          <ProgramParagraph>- PEP database checks;</ProgramParagraph>
          <ProgramParagraph>
            - proof of residence (g. utility bill) in some cases;
          </ProgramParagraph>
          <ProgramParagraph>
            For the purpose of verifying your identity and AML/KYC due
            diligence:
          </ProgramParagraph>
          <ProgramParagraph>
            - Video identification procedure, which involves making a recording
            of your physical appearance.
          </ProgramParagraph>
          <ProgramParagraph>
            For Entities COMPANY asks to provide the following documents:
          </ProgramParagraph>
          <ProgramParagraph>
            - Name, registration number, legal form (type), address, date of
            incorporation, and existence (on the verification date).
          </ProgramParagraph>
          <ProgramParagraph>
            - Information for the KYC/AML check (at least full name and email
            address) of the stakeholders including beneficial owners,
            shareholders, directors, etc.
          </ProgramParagraph>
          <ProgramParagraph>
            - Corporate documents required under the local laws, e.g. articles,
            the certificate of incorporation/certificate of registration or
            certificate of incumbency, valid excerpt from the public companies
            registry, certificate of good standing etc.
          </ProgramParagraph>
          <ProgramParagraph>
            - The documents confirming beneficial ownership, e.g. the registry
            of shareholders.
          </ProgramParagraph>
          <ProgramParagraph>
            - Video identification procedure of the Ultimate Beneficial Owner
            (UBO), which involves making a recording of your physical
            appearance.
          </ProgramParagraph>
          <ProgramParagraph>
            The submitted documents should be no more than three months old
          </ProgramParagraph>
          <ProgramParagraph>
            COMPANY has the right to require data and/or documents which would
            help COMPANY to identify Client. Specific data and/or documents to
            be submitted shall be indicated in the message to Client about the
            necessity to perform the identification procedure. When performing
            Client identification, COMPANY has the right to demand from Client
            to provide originals of the documents and/or their copies and/or
            copies of documents approved by a notary or another person
            authorized by the state.
          </ProgramParagraph>
          <ProgramParagraph>
            2.16. COMPANY has the right to request from Client additional
            information and/or documents related to Client or operations
            performed by him/her, and to request Client to fill in and
            periodically (at least once a year) update Client`s questionnaire.
            COMPANY has the right to demand for the submitted copies of the
            documents to be approved by a notary and/or translated into at least
            one of the languages acceptable to COMPANY. All documents and
            information are prepared and provided at the expense of Client. If
            Client does not provide additional information and/or documents
            within a reasonable term specified by COMPANY, COMPANY has the right
            to suspend provision of all or a part of the Services provided to
            Client.
          </ProgramParagraph>
          <ProgramParagraph>
            2.17. COMPANY is entitled to correct the entered by Client data,
            based on the information provided by Client, if the mistake is in
            1-2 signs. If personal data entered by Client is very different from
            provided in proof of identity documents, request for identification
            should be declined. If due to inaccurate data Client has created
            several Accounts, s/he shall inform COMPANY thereof, so that all
            created Accounts would be merged into one Account.
          </ProgramParagraph>
          <ProgramParagraph>
            2.18. If Client terminates the Agreement or if COMPANY terminates
            provision of the COMPANY Account service to Client, money held on
            the Client`s Account shall be transferred to the Client`s bank
            account or to the account in another payment system indicated by
            Client. COMPANY has the right to deduct from such repaid money the
            amounts that belong to COMPANY. In the event of a dispute between
            COMPANY and Client, COMPANY has the right to detain money under
            dispute till the dispute is solved.
          </ProgramParagraph>
          <ProgramParagraph>
            2.19. Client can manage the COMPANY Account via the Internet by
            logging in to his/her Account with his/her login name and Password.
            Client shall create a strong password that is not used for any other
            website or online service. If Client indicates wrong data about the
            Recipient of virtual and/or fiat currency, it shall be considered
            that COMPANY has fulfilled its obligations properly and shall not
            repay the transferred amount to Client. Client may only cancel an
            order initiated via the Services if such cancellation occurs before
            COMPANY executes the transaction. Once order has been executed,
            Client may not change, withdraw or cancel authorization for COMPANY
            to complete such transaction.
          </ProgramParagraph>
          <ProgramParagraph>
            2.20. If virtual and/or fiat currency is credited to the Client`s
            COMPANY account by mistake or in other ways under no legal basis,
            COMPANY has the right and Client gives an irrevocable consent in
            such cases to deduct the currency from the Client`s COMPANY Account
            without Client`s order. If the amount of currency on the Client`s
            COMPANY Account is insufficient to debit the currency credited by
            mistake, Client unconditionally commits to repay COMPANY the
            currency credited by mistake in 3 (three) business days from receipt
            of the request from COMPANY. If Client notices that virtual and/or
            fiat currency that do not belong to him/her has been transferred to
            his/her COMPANY Account, s/he shall immediately inform COMPANY
            thereof. Client has no right to manage currency credited by mistake,
            which does not belong to him/her.
          </ProgramParagraph>
          <ProgramParagraph>
            2.21. Client`s confirmations, orders, requests, notifications and
            other actions performed on websites of third persons or other places
            by logging in to his/her COMPANY Account and identifying him/herself
            in this way are treated as conclusion of a deal confirmed by
            electronic signature.
          </ProgramParagraph>
          <ProgramTitle>3. ACCOUNT FUNDS</ProgramTitle>
          <ProgramParagraph>
            3.1. To complete an order, Client must first load Funds to COMPANY
            Account using one of the approved External Accounts identified via
            the Services. Client may be required to verify that control the
            External Account that Client use to load Funds to COMPANY Account.
            Clients are solely responsible for use of any External Account and
            agree to comply with all terms and conditions applicable to any
            External Account.
          </ProgramParagraph>
          <ProgramParagraph>
            3.2. The timing associated with a load transaction will depend in
            part upon the performance of third parties responsible for
            maintaining the applicable External Account, and COMPANY makes no
            guarantee regarding the amount of time it may take to load Funds
            into the COMPANY Account.
          </ProgramParagraph>
          <ProgramParagraph>
            3.3. COMPANY has the right to record and store any orders submitted
            via any of the methods agreed on with COMPANY, and to record and
            store information about all transactions performed by Client or
            according to orders of Client. Records mentioned in the present
            clause can be submitted by COMPANY to Client and/or third persons,
            who have the right to receive such data under the basis outlined in
            the legislation, as evidence confirming submitted orders and/or
            executed transactions.
          </ProgramParagraph>
          <ProgramParagraph>
            3.4. COMPANY has the right to refuse to execute a submitted order if
            there are doubts that the order has been submitted by the Client or
            the submitted documents are falsified. If COMPANY has reasonable
            doubts that the order has been submitted by Client or that the
            documents submitted to COMPANY are falsified or doubts about the
            legitimacy of the content of the submitted order, COMPANY has the
            right to demand from Client to additionally confirm the submitted
            order and/or submit to COMPANY documents confirming the right of
            persons to manage the Funds held on the Account or other documents
            indicated by COMPANY via a method acceptable to COMPANY at his/her
            own expense. In cases mentioned in the present clause, COMPANY acts
            with the aim to protect the legal interests of Client, COMPANY,
            and/or other persons; thus, COMPANY does not undertake the
            responsibility for losses that may arise due to refusal to execute
            the submitted order.
          </ProgramParagraph>
          <ProgramParagraph>
            3.5. Before executing the payment order submitted by Client, COMPANY
            has the right to demand from Client to submit documents that prove
            the legal source of money related to the execution of the order. If
            Client does not submit such documents, COMPANY has the right to
            refuse to execute the order of Client.
          </ProgramParagraph>
          <ProgramParagraph>
            3.6. COMPANY has the right to suspend and/or cancel the execution of
            the order submitted by Client if it is required by applicable legal
            acts or due to other reasons beyond the control of COMPANY.
          </ProgramParagraph>
          <ProgramParagraph>
            3.7. If Funds transferred by the order is returned due to reasons
            beyond the control of COMPANY (inaccurate data of the payment order,
            the account of the Recipient is closed, etc.), the returned amount
            is credited to the Account of Client. Fees paid by Client for the
            execution of the order are not returned, and other fees and costs
            related to the returning of money and applied against COMPANY can be
            debited from the Client`s Account.
          </ProgramParagraph>
          <ProgramParagraph>
            3.8. COMPANY may review the Client`s withdrawal transaction to
            mitigate any risks and/or prevent money laundering and to ascertain
            whether the transaction is connected to any Prohibited Activity. If
            the risk is identified, COMPANY reserves the right to refuse the
            payment order. Be advised that fiat funds held in the COMPANY
            account are exclusively for the purchase of Digital Assets or
            withdrawal to Client approved External Account. Proceeds from the
            sale of Digital Assets will be credited to your fiat account, less
            any transactional or other fees. Furthermore, be advised that
            COMPANY does not pay interest on free fiat balances held in your
            account.
          </ProgramParagraph>
          <ProgramParagraph>
            3.9. If you have opened a COMPANY Wallet, you may only fund your
            account with digital assets. COMPANY will not accept fiat to fund a
            Digital Assets Only Account. If fiat is transmitted to fund such an
            account, it will be returned to the sender, less applicable transfer
            fees. Client agrees to maintain in the COMPANY Account/Wallet a
            sufficient amount of Funds to meet minimum balance requirements
            imposed by COMPANY for users to engage in currency exchange. Client
            acknowledges that if Client does not have sufficient funds to meet
            such minimum balance requirements, that COMPANY may automatically
            stop transactions without notice. COMPANY may modify such minimum
            balance requirements from time to time, at its sole discretion.
          </ProgramParagraph>
          <ProgramParagraph>
            3.10. Only valid payment methods specified by COMPANY may be used
            for COMPANY Services. All exchanges of fiat and virtual currency via
            COMPANY Service are final. COMPANY does not accept any returns or
            provide refunds for Client, except as otherwise provided in this
            Agreement.
          </ProgramParagraph>
          <ProgramTitle>4. KEEPING YOUR ACCOUNT SAFE</ProgramTitle>
          <ProgramParagraph>
            4.1. Client must take all reasonable steps to keep the Account
            password and any other security features safe at all times and never
            disclose them to anyone. COMPANY personnel will never ask Clients to
            provide password to COMPANY or to a third party. Any message you
            receive or website you visit that asks for your password or other
            security features, other than the COMPANY Website or a COMPANY
            payment gateway on a merchant website, should be reported to
            COMPANY. If you are in doubt whether a website is genuine, you
            should contact Customer Service. It is advisable to change your
            password regularly (at least every three (3) to six (6) months) in
            order to reduce the risk of a security breach in relation to your
            Account. COMPANY also advises Clients not to choose a password that
            is easily guessed from information someone might know or gather
            about you or a password that has a meaning. You must never allow
            anyone to access your Account or watch you accessing your Account.
            Client must comply with the security procedures COMPANY tells you
            about from time to time.
          </ProgramParagraph>
          <ProgramParagraph>
            4.2. If Client has any indication or suspicion of the Account, login
            details, password or other security feature being lost, stolen,
            misappropriated, used without authorization or otherwise
            compromised, Client is advised to change the password. Client must
            contact Customer Service without undue delay on becoming aware of
            any loss, theft, misappropriation or unauthorised use of the
            Account, login details, password or other security features. Any
            undue delay in notifying COMPANY may not only affect the security of
            the Account but may result in you being liable for any losses as a
            result where your failure to notify COMPANY is intentional or
            grossly negligent.
          </ProgramParagraph>
          <ProgramParagraph>
            4.3. If COMPANY thinks the Client Account is at risk of fraud or a
            security threat, COMPANY will use the fastest and most secure way of
            contacting Client using the details you have provided to tell Client
            what s/he needs to do to help deal with that risk.
          </ProgramParagraph>
          <ProgramTitle>5. CLOSING ACCOUNT</ProgramTitle>
          <ProgramParagraph>
            5.1. Client may close the Account at any time by contacting Customer
            Service.
          </ProgramParagraph>
          <ProgramParagraph>
            5.2. If Client holds a balance at the Account at the time of its
            closure, COMPANY will ask Client to withdraw the funds within a
            reasonable period of time, during which the Account will be
            accessible for the purpose of withdrawing the remaining balance
            only. After the expiry of this period Client will not be able to
            access the Account but may withdraw any remaining funds by
            contacting Customer Service and requesting that the funds are sent
            to Client in a manner that is reasonably acceptable for COMPANY. If
            Client wants to access the transaction history after the closure of
            the Account, Client will need to contact Customer Service and
            request the information.
          </ProgramParagraph>
          <ProgramParagraph>
            5.3. COMPANY reserves the right to carry out any necessary money
            laundering, terrorism financing, fraud or other illegal activity
            checks before authorising any withdrawal of your funds, including in
            relation to returning any funds to Client after Client has closed
            the Account.
          </ProgramParagraph>
          <ProgramTitle>6. FEES AND SETTLEMENTS</ProgramTitle>
          <ProgramParagraph>
            6.1. Client is obliged to pay COMPANY for the services provided to
            Client by COMPANY the fees stipulated in the separate price list or
            on COMPANY website, which we may change from time to time. Changes
            to fees are effective as of the effective date indicated in the
            posting of the revised fees on the website or in separate price list
            provided by us, and will apply prospectively to any transactions
            that take place following the effective date of such posting or such
            separate price list. In case if a list of prices for Company
            services is amended, the Client should electronically via the System
            accept this amendment. Your Account and all virtual currency
            transactions are made and displayed in the currency of the virtual
            currency held or the virtual currency of the Virtual Currency
            Transaction you are conducting.
          </ProgramParagraph>
          <ProgramParagraph>
            6.2. If you have chosen to setup our conversion feature to allow for
            an automated conversion of virtual currencies when you receive them
            as a payment or otherwise, you agree to accept such conversion at
            the rate provided including, without limitation, our conversion
            fees, which may be adjusted from time to time. We do not guarantee
            the availability of any conversion rate.
          </ProgramParagraph>
          <ProgramParagraph>
            6.3. You authorize us, or our designated third party, to charge or
            deduct from your Account funds for any applicable Fees owed in
            connection with transactions completed or approved by you or in
            connection with your Account via the Services.
          </ProgramParagraph>
          <ProgramParagraph>
            6.4. COMPANY shall be entitled to unilaterally change the applicable
            fees for the Services. By executing the Agreement, Client represents
            and warrants that Client has familiarized himself with the
            applicable fees and respective terms and conditions in relation
            thereto.
          </ProgramParagraph>
          <ProgramParagraph>
            6.5. COMPANY Commission fees are deducted:
          </ProgramParagraph>
          <ProgramParagraph>- during the payment operation;</ProgramParagraph>
          <ProgramParagraph>
            - if Commission fees have not been deducted during the payment
            operation, COMPANY has the right to deduct them later;
          </ProgramParagraph>
          <ProgramParagraph>
            - Client confirms that s/he has carefully acquainted with the prices
            and terms of payment transfers and also with prices of all COMPANY
            Services that are applied to and relevant for him/her;
          </ProgramParagraph>
          <ProgramParagraph>
            - The Commission fee is paid in the currency of payment;
          </ProgramParagraph>
          <ProgramParagraph>
            - Client commits to ensure a sufficient amount of money on his/her
            account to pay/deduct the Commission fee.
          </ProgramParagraph>
          <ProgramParagraph>
            6.6. Client responsible for maintaining an adequate balance and
            sufficient proceeds in Account in order to pay for fees and complete
            transactions and in order to avoid overdraft, insufficient funds, or
            similar fees being charged. If reversal of funding occurs because
            you have used credit then you are fully and solely responsible for
            any resulting debit.
          </ProgramParagraph>
          <ProgramParagraph>
            6.7. Client may withdraw virtual currency from your Account;
            however, we reserve the right to require you to provide certain
            information including, without limitation, identification
            information and settle any outstanding fees or other amounts prior
            to completing any withdrawals.
          </ProgramParagraph>
          <ProgramParagraph>
            6.8. Client may send virtual currency from your Account to another
            account or to an external virtual currency address; however, we
            reserve the right to require you to provide certain information
            including, without limitation, identification information and settle
            any outstanding
          </ProgramParagraph>
          <ProgramParagraph>
            fees or other amounts prior to completing any such payments. You
            authorize us to deduct from your Account fees, costs, expenses and
            claims due and unpaid by you. All virtual currency transactions are
            at your sole risk.
          </ProgramParagraph>
          <ProgramParagraph>
            6.9. When you send a payment to a third party through COMPANY
            Services, the recipient is not required to accept the payment, even
            if the recipient is also a registered User. The recipient may return
            the payment or, in some cases, use our Services to reject payments
            that you send. Any
          </ProgramParagraph>
          <ProgramParagraph>
            payments sent through our Services that are rejected or unclaimed by
            a recipient will be returned to you as soon as reasonably
            practicable after the date the payment is rejected and the virtual
          </ProgramParagraph>
          <ProgramParagraph>
            currency or funds are returned. Our standard fees apply for such
            transactions.
          </ProgramParagraph>
          <ProgramParagraph>
            6.10. All virtual currency transactions are final with no method of
            refunding, charging back or other recourse for the sender of the
            virtual currency. As such we are unable to cancel, reverse or
            provide refunds for any virtual currency transaction made through
            our Services.
          </ProgramParagraph>
          <ProgramParagraph>
            6.11. If your virtual currency was not received and/or confirmed on
            the relevant virtual currency platform or you sent more virtual
            currency then you intended to send we may be able to refund you the
            virtual currency as long as you have promptly notified us in time
            and such virtual currency is still within our control. To apply for
            a refund, open a support ticket providing your transaction ID,
            verification code, and refund virtual currency address.
          </ProgramParagraph>
          <ProgramParagraph>
            6.12. If your virtual currency was not received and/or confirmed on
            the All refunds must be claimed within 30 days of us receiving your
            virtual currency or it will be forfeited. Refunds of virtual
            currency and other funds may be returned to you minus our costs, the
            unsubsidized coin/miner network transaction fee and any other third
            party charges. For a refund to be honored it must be at least equal
            to the network transaction fee for that virtual currency times two,
            otherwise it will be forfeited.
          </ProgramParagraph>
          <ProgramTitle>7. PROHIBITED ACTIVITIES</ProgramTitle>
          <ProgramParagraph>
            7.1. Client is prohibited from not complying with the terms of the
            Agreement, the supplements to the Agreement, legislation and other
            legal acts, including but not limited to, anti-money laundering and
            counters-terrorist financing acts, violating the rights of COMPANY
            and third parties to trademarks, copyrights, commercial secrets and
            other intellectual property rights; providing false, misleading or
            incorrect information to COMPANY; refusing to provide information or
            undertake other actions that are reasonably requested by COMPANY,
            executing or receiving transfers of illegally acquired funds, if
            Client is aware of or should be aware of it, using services of
            COMPANY in a way which causes losses, responsibility or other
            negative legal consequences or damage to business reputation of
            COMPANY or third persons.
          </ProgramParagraph>
          <ProgramParagraph>
            7.2. Using COMPANY services from countries that are not acceptable
            to COMPANY.
          </ProgramParagraph>
          <ProgramParagraph>
            7.3. Spreading computer viruses and undertaking other actions that
            could cause system malfunctions, information damage or destruction
            and other damage to the system, equipment or information of COMPANY;
            undertaking any other deliberate actions which could disturb
            provision of COMPANY`s services to Client or third parties or proper
            functioning of the system.
          </ProgramParagraph>
          <ProgramParagraph>
            7.4. Organizing illegal gambling, illegal trading of stocks,
            indices, raw materials, currency, options, exchange-traded funds;
            providing of trade, investment or other services on currency
            exchanges, Forex markets and other electronic currency trading
            systems; engaging in illegal trades of tobacco products, alcohol,
            prescription drugs, steroids, weapons, narcotic substances and its
            attributes, pornographic production, unlicensed lottery, illegal
            software and other articles or products prohibited by the law.
          </ProgramParagraph>
          <ProgramParagraph>
            7.5. Without a prior written consent of COMPANY providing financial
            services and/or legally organizing trading in stocks, indices, raw
            materials, currencies (e.g. Forex), options, exchange-traded funds
            (ETFs), providing trade, investment or other services on currency
            exchanges, Forex markets and other electronic currency trading
            systems. In case the Client intends to provide financial services
            using the account, it must have a valid license, issued by a member
            state of the European Union or a third country that has imposed
            equivalent or substantially similar requirements and is monitored by
            the competent authorities with respect to compliance with these
            requirements.
          </ProgramParagraph>
          <ProgramParagraph>
            7.6. Without a prior written consent of COMPANY to organize legal
            gambling, lotteries, other specially licensed or activities
            requiring a permit. In case Client intends to provide the indicated
            services using the account, Client must have a valid license, issued
            by a member state of the European Union and monitored by the
            competent authorities with respect to compliance with these
            requirements;
          </ProgramParagraph>
          <ProgramParagraph>
            7.7. Client shall reimburse all direct damages, fines and other
            monetary sanctions applied to COMPANY due to non-observance or
            violation of the terms, including but not limited to, clause 7 of
            the present Agreement due to fault of Client.
          </ProgramParagraph>
          <ProgramParagraph>
            7.8. Client is responsible and undertakes to reimburse any losses
            incurred by COMPANY, other COMPANY`s Clients and third parties due
            to using COMPANY`s services and violating the present Agreement or
            its supplements by Client.
          </ProgramParagraph>
          <ProgramTitle>8. COMMUNICATION WITH THE CLIENT</ProgramTitle>
          <ProgramParagraph>
            8.1. COMPANY usually contacts Client via email or Jira. For this
            purpose Client must at all times maintain at least one valid email
            address in the COMPANY Account profile. You are required to check
            for incoming messages regularly and frequently. Emails may contain
            links to further communication on COMPANY`s Website.
          </ProgramParagraph>
          <ProgramParagraph>
            8.2. Client acknowledges that COMPANY notification, submitted in any
            of the above-mentioned ways, shall be deemed as properly provided.
          </ProgramParagraph>
          <ProgramParagraph>
            8.3. In case a party of the Agreement consists of plurality of
            persons (holders of a joint account, etc.), COMPANY has the right to
            address notifications to any of the persons involved. The person who
            has received the information shall transmit the information to other
            persons indicated in the Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            8.4. COMPANY communicates to Client in English and will always
            accept communications made in English. But Client can choose
            preferred language from the list of supported languages in the
            Account profile. For non-standard communication, COMPANY reserves
            the right to communicate with Client in English. Documents or
            communications in any other languages are for convenience only and
            shall not constitute an obligation on COMPANY to conduct any further
            communication in that language.
          </ProgramParagraph>
          <ProgramParagraph>
            8.5. COMPANY may change the solution for technical integration of
            services without constraint and at any time. Notification about any
            changes which require corrections in the software of Client shall be
            sent at least 30 (thirty) days in advance. Changes, required from
            the side of Client, shall be made at expense of Client.
          </ProgramParagraph>
          <ProgramParagraph>
            8.6. The Parties shall immediately inform each other about any
            circumstances significant for execution of the Agreement. Client
            shall submit documents confirming such circumstances (e.g. changes
            in name, surname, signature, address, phone number, other contact
            data, personal document or persons who have the right to manage
            funds on the Account, initiation of bankruptcy proceedings against
            Client, etc.).
          </ProgramParagraph>
          <ProgramTitle>9. INTELLECTUAL PROPERTY</ProgramTitle>
          <ProgramParagraph>
            9.1. COMPANY`s services and the Website, and the content, and all
            intellectual property relating to them and contained in them
            (including but not limited to copyrights, patents, database rights,
            trademarks and service marks) are owned by COMPANY, our affiliates,
            or third parties. All right, title and interest in and to the
            COMPANY, our Services and our Website will remain our property
            and/or the property of such other third parties.
          </ProgramParagraph>
          <ProgramParagraph>
            9.2. Except as expressly provided in these T&C, no part of the Site
            and no content or marks may be copied, reproduced, aggregated,
            republished, uploaded, posted, publicly displayed, encoded,
            translated, transmitted, distributed, sold, licensed, or otherwise
            exploited for any commercial purpose whatsoever, without our express
            prior written permission.
          </ProgramParagraph>
          <ProgramTitle>10. AMENDMENTS TO THE AGREEMENT</ProgramTitle>
          <ProgramParagraph>
            10.1. COMPANY has the right to unilaterally amend and/or supplement
            conditions of the Agreement by following the notification procedure
            set forth the present Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            10.2. Client has no right to unilaterally change and/or amend the
            conditions of the Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            10.3. In case Client does not agree to amendments or supplements to
            the Agreement, it has the right to refuse COMPANY services and
            terminate the Agreement, notifying COMPANY thereof 30 (thirty) days
            in advance.
          </ProgramParagraph>
          <ProgramParagraph>
            10.4. Using COMPANY services after the amendments or supplementation
            of conditions of the Agreement have come into force shall deem that
            Client agrees with the amendments or supplements of the conditions
            of the Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            10.5. Supplements to the Agreement are amended according to the
            procedure laid down in the respective supplement. If no amendment
            procedure is laid down in the supplement, the procedure of amendment
            and amendment notification procedure stated in this Agreement shall
            apply.
          </ProgramParagraph>
          <ProgramTitle>
            11. SUSPENTIION AND TERMINATION THE AGREEMENT
          </ProgramTitle>
          <ProgramParagraph>
            11.1. The period of this Agreement will extend from the day Client
            opens to the day the Client either decides to close the Account, or
            COMPANY decides to close the Account and terminates the Agreement
            for any one of the reasons stated in this Agreement. COMPANY, at its
            own discretion and taking into consideration the specific situation,
            giving preference to the execution of legal acts, applied to the
            activity of COMPANY, and interests of Client, has the right to
            unilaterally and without a prior notice apply one or several of the
            following measures:
          </ProgramParagraph>
          <ProgramParagraph>
            - to suspend execution of transfers;
          </ProgramParagraph>
          <ProgramParagraph>
            - to suspend the provision of all or part of services to Client;
          </ProgramParagraph>
          <ProgramParagraph>
            - limit Client`s access to the account;
          </ProgramParagraph>
          <ProgramParagraph>
            - to detain the Client`s funds that are a matter of dispute;
          </ProgramParagraph>
          <ProgramParagraph>
            - to block the account (i.e. fully or partially suspend payment
            operations on the account);
          </ProgramParagraph>
          <ProgramParagraph>- to refuse to provide services;</ProgramParagraph>
          <ProgramParagraph>
            - to return arrested funds from the account of Client to the primary
            sender of funds.
          </ProgramParagraph>
          <ProgramParagraph>
            11.2. Measures indicated in clauses 11.1. of the Agreement may be
            applied only in the following exceptional cases:
          </ProgramParagraph>
          <ProgramParagraph>
            - if Client essentially violates the Agreement or its supplements,
            or a real threat of essential violation of the Agreement or its
            supplements by Client arises;
          </ProgramParagraph>
          <ProgramParagraph>
            - if activities of Client using Account have a potential to harm
            COMPANY business reputation;
          </ProgramParagraph>
          <ProgramParagraph>
            - if Client fails to complete necessary identification procedures,
            or submit the required
          </ProgramParagraph>
          <ProgramParagraph>by COMPANY information;</ProgramParagraph>
          <ProgramParagraph>
            - if due to further provision of services and activity of Client,
            justified interests of third parties may be harmed;
          </ProgramParagraph>
          <ProgramParagraph>
            - if due to objectively justified reasons related to safety of funds
            on the account, unauthorized or fraudulent use of money on the
            account;
          </ProgramParagraph>
          <ProgramParagraph>
            - if COMPANY receives substantiated information about liquidation of
            Client or bankruptcy case;
          </ProgramParagraph>
          <ProgramParagraph>
            - in cases specified by legislation;
          </ProgramParagraph>
          <ProgramParagraph>
            - in other cases, stated in the Agreement or its supplements.
          </ProgramParagraph>
          <ProgramParagraph>
            11.3 In the event of a reasonable suspicion that money laundering,
            terrorist financing or other criminal activity is being executed
            through Client or the account of Client, COMPANY has the right to
            partially or completely suspend provision of the services to Client
            for a period of 30 (thirty) days with the right to extend it
            unlimited number of times until the charges are fully withdrawn or
            confirmed. In case of reasonable suspicion by COMPANY that the
            account or account of Client has been hacked, COMPANY has the right
            to partially or completely suspend provision of services to Client
            without prior notice. In such case, COMPANY will inform Client about
            the suspension and provide further information on actions that have
            to be performed by Client in order to resume provision of services
            to Client.
          </ProgramParagraph>
          <ProgramParagraph>
            11.4 COMPANY cancels blockage of the Account when causes for
            blockage of the Account cease to exist.
          </ProgramParagraph>
          <ProgramParagraph>
            11.5 The account may be blocked at the initiative of Client if
            Client submits an appropriate request to COMPANY and informs COMPANY
            that funds on the account used illegally. COMPANY has the right to
            demand from Client to later confirm the orally submitted request to
            block the Account in written or another acceptable to COMPANY way.
            If the Account has been blocked at the initiative of Client, COMPANY
            has the right to cancel blockage only after receiving a written
            request from Client, unless the Agreement states otherwise.
          </ProgramParagraph>
          <ProgramParagraph>
            11.6 COMPANY is not liable for losses incurred by Client due to
            suspension of service provision, blockage of the account or other
            actions if those actions have been performed in accordance with the
            procedures stated in the Agreement or its supplements and under
            circumstances and on the basis specified in the mentioned documents.
          </ProgramParagraph>
          <ProgramParagraph>
            11.7. Following the procedure set forth by the law, COMPANY has the
            right to withhold money of the payment operation for up to 10 (ten)
            business days or for a longer period of time stated by the law, the
            Agreement or its supplement.
          </ProgramParagraph>
          <ProgramParagraph>
            Client has the right to terminate the Agreement unilaterally without
            appealing to the court, notifying COMPANY thereof in writing 30
            (thirty) calendar days in advance.
          </ProgramParagraph>
          <ProgramParagraph>
            11.8. COMPANY has the right to terminate the Agreement and its
            supplements unilaterally and refuse to provide services without
            indicating the reason, notifying thereof the Client 30 (thirty) days
            in advance. COMPANY also has the right to terminate the Agreement
            and its supplements unilaterally and refuse to provide services for
            the reasons stated in clause 7 of the present Agreement immediately.
          </ProgramParagraph>
          <ProgramParagraph>
            11.9. Ander a request of COMPANY, the Agreement and its supplements
            may be terminated immediately, in case no operations have been made
            on the account of Client for more than one year. In case of
            termination of the Agreement, COMPANY deducts from the Account of
            Client money amounts, payable for COMPANY services provided to
            Client, also fines, forfeits losses and other amounts paid to third
            parties or the state, which COMPANY has incurred due to the fault of
            Client. In case the amount of money on Account (or accounts) of
            Client is insufficient, Client undertakes to transfer provided
            amounts to the account of COMPANY within 3 (three) business days
            covering all amounts indicated in the present clause. In case
            COMPANY regains a part of amounts paid to third parties, COMPANY
            undertakes to return the regained amounts to Client immediately.
          </ProgramParagraph>
          <ProgramParagraph>
            11.10. Termination of the general Agreement does not exempt Client
            from appropriate execution of all liabilities to COMPANY that were
            applicable towards Client before the termination.
          </ProgramParagraph>
          <ProgramTitle>12. CONFIDENTIALITY AND DATA PROTECTION</ProgramTitle>
          <ProgramParagraph>
            12.1. The Parties undertake to keep technical and commercial
            information of each other secret, except for publicly available
            information which has become known to them while executing the
            present Agreement, and not transfer it to third parties without a
            written consent from the other party or its legal representatives.
          </ProgramParagraph>
          <ProgramParagraph>
            12.2. Client agrees that COMPANY shall manage a personal data with
            the following purposes:
          </ProgramParagraph>
          <ProgramParagraph>
            - to provide payment services and to comply with legislation;
          </ProgramParagraph>
          <ProgramParagraph>
            - to provide service-related information on Client`s requests;
          </ProgramParagraph>
          <ProgramParagraph>- in marketing purposes;</ProgramParagraph>
          <ProgramParagraph>
            - to protect COMPANY`s interests before any court or any other
            institution.
          </ProgramParagraph>
          <ProgramParagraph>
            12.3 The parties shall take all reasonable measures to guarantee
            security of personal data received while executing the present
            Agreement. COMPANY may disclose personal data to the following
            entities:
          </ProgramParagraph>
          <ProgramParagraph>
            - companies that provide services for COMPANY;
          </ProgramParagraph>
          <ProgramParagraph>
            - banks/companies that provide payment services;
          </ProgramParagraph>
          <ProgramParagraph>
            - companies assisting with organizing competitions/games/promotions;
          </ProgramParagraph>
          <ProgramParagraph>
            - other carefully selected business partners;
          </ProgramParagraph>
          <ProgramParagraph>
            - other parties, when so required under law or necessary in order to
            protect our legitimate interests.
          </ProgramParagraph>
          <ProgramParagraph>
            12.4 Detail information about personal data management, periods of
            storage and etc. are described in COMPANY`s Privacy Policy.
          </ProgramParagraph>
          <ProgramParagraph>
            12.5 COMPANY has the right or a statutory obligation to transmit all
            collected important information (including personal data) about
            Client, Client`s representatives and their activity to law
            enforcement institutions, state authorities and financial
            institutions as well as supervisory authorities, if such duty is
            determined by the legislation, and in order to identify whether this
            Agreement and relevant legislation have not been or will not be
            violated.
          </ProgramParagraph>
          <ProgramParagraph>
            12.6 Client is informed that COMPANY might undertake necessary
            measures, including but not limited to, submitting requests to third
            persons directly or via third parties in order to determine identity
            of Client and accuracy of other data submitted by Client (Know Your
            Client procedure).
          </ProgramParagraph>
          <ProgramTitle>13 LIABILITY OF THE PARTIES</ProgramTitle>
          <ProgramParagraph>
            13.1. Each Party is liable for all fines, forfeits and other losses
            which the other party incurs due to violation of the Agreement by
            the guilty Party. The guilty Party undertakes to reimburse direct
            damage incurred due to such liability to the affected Party.
          </ProgramParagraph>
          <ProgramParagraph>
            13.2. The liability of the Parties is established in accordance with
            the laws and case law of the courts of the Republic of Estonia.
            COMPANY is not liable for the Client`s losses resulted through the
            Client`s fault and/or from lawful actions of COMPANY.
          </ProgramParagraph>
          <ProgramParagraph>
            13.3. Nothing in this Agreement shall operate to exclude liability
            for death or personal injury due to negligence or for fraud or
            fraudulent misrepresentation or for any statutory liability that
            cannot be excluded or amended by Agreement between the Parties.
          </ProgramParagraph>
          <ProgramParagraph>
            13.4. COMPANY will not be liable for any indirect or consequential
            losses including but not limited to loss of profit, loss of business
            and loss of reputation, unless otherwise expressly indicated in the
            laws.
          </ProgramParagraph>
          <ProgramParagraph>
            13.5. COMPANY will only be liable for direct damages caused by
            direct and essential breach of the Agreement made by COMPANY, and
            only for damages which could have been foreseen by COMPANY at the
            time of breaching of the Agreement.
          </ProgramParagraph>
          <ProgramParagraph>
            13.6. The amount of compensation for damages caused by violating the
            Agreement by COMPANY shall not exceed the average of commission fees
            for the last 3 (three) months paid to COMPANY by Client for provided
            services. This restriction is applied for the total amount of all
            violations of the month. In case the average of 3 (three) months
            cannot be calculated, the compensation cannot exceed EUR 1,000 (one
            thousand euro).
          </ProgramParagraph>
          <ProgramParagraph>
            13.7. In all cases, COMPANY shall not be liable for non-receipt of
            profit and income by Client, loss of reputation of Client, loss or
            failure of Client`s business, and indirect damages;
          </ProgramParagraph>
          <ProgramParagraph>
            13.8. limitations of COMPANY liability shall not be applied if such
            limitations are prohibited by the applicable law.
          </ProgramParagraph>
          <ProgramParagraph>
            13.9. COMPANY does not guarantee uninterrupted system operation,
            because system operation may be influenced (disordered) by many
            factors beyond control of COMPANY. COMPANY shall put all efforts to
            secure as fluent system operation as possible, however, COMPANY
            shall not be liable for consequences originating due to system
            operation disorders if such disorders occur not due to the fault of
            COMPANY.
          </ProgramParagraph>
          <ProgramParagraph>
            13.10. Cases, when COMPANY limits access to the system temporarily,
            but not longer than for 24 hours, COMPANY informs the Client about
            such cases at least 2 (two) calendar days in advance, shall not be
            considered system operation disorders.
          </ProgramParagraph>
          <ProgramParagraph>13.11. COMPANY is not liable for:</ProgramParagraph>
          <ProgramParagraph>
            13.11.1. money withdrawal and/or transfer from the Account and for
            other payment operations with funds held on the Client`s Account if
            Client had not protected its passwords and identification
            instruments, and as a result they have become known to other
            persons, and also for illegal actions and operations of third
            persons performed using counterfeited and/or illegal documents or
            illegally received data;
          </ProgramParagraph>
          <ProgramParagraph>
            13.11.2. equences arising after COMPANY legally terminates the
            Agreement, cancels Client`s Account or limits access to it, also
            after reasonable limitation/termination of provision of a part of
            the services;
          </ProgramParagraph>
          <ProgramParagraph>
            13.11.3. goods and services purchased using Account, and also for
            other party, which receives payments from the Account, not complying
            with terms of any Agreement;
          </ProgramParagraph>
          <ProgramParagraph>
            13.11.4. for a failure to fulfil its own contractual obligations and
            damages in case it was caused due to COMPANY fulfilling duties
            determined by the law.
          </ProgramParagraph>
          <ProgramParagraph>
            13.12. The Client assures that all actions of Client related to the
            execution of the Agreement will comply with the applicable law. The
            Client is fully liable for correctness of data, orders and documents
            submitted to COMPANY.
          </ProgramParagraph>
          <ProgramParagraph>
            13.13. The Party is relieved from the liability for failure to
            comply with the Agreement in case the Party proves that the
            Agreement has not been executed due to circumstances of force
            majeure which are proven in accordance with the procedure
            established by the law. Client shall notify COMPANY about the force
            majeure in writing within 10 (ten) calendar days after the day of
            occurrence of such circumstances. COMPANY shall notify Client about
            force majeure circumstances via email or websites of the system.
          </ProgramParagraph>

          <ProgramTitle>14. FORCE MAJEURE</ProgramTitle>
          <ProgramParagraph>
            14.1. We are not responsible for any failure to perform our
            obligations under this Agreement if we are prevented or delayed in
            performing these obligations by an event or circumstances beyond our
            reasonable control. Such event or circumstances include, but are not
            limited to earthquakes, flood, fire or other physical natural
            disaster, riot, war, acts of terrorism, revolution, explosions,
            national strikes, government restrictions and pandemics.
          </ProgramParagraph>
          <ProgramTitle>15. SETTLEMENT OF DISPUTE</ProgramTitle>
          <ProgramParagraph>
            15.1. The Terms and Conditions shall be governed by and interpreted
            in accordance with the laws of Estonia.
          </ProgramParagraph>
          <ProgramParagraph>
            15.2. All disputes arising out of or in connection with this T&C
            shall be finally settled by arbitration in accordance with the Rules
            of the Arbitration Court of the Estonian Chamber of Commerce and
            Industry. The Parties shall attempt to resolve all disputes relating
            to these Terms of Use by negotiations. If the Parties fail to
            resolve the disputes relating to the terms of this T&C through
            negotiations, the dispute shall be conclusively resolved in the
            Arbitration Court of the Chamber of Commerce and Industry of Estonia
            in Tallinn (hereinafter: the Arbitration Court) in accordance with
            the Rules of the Arbitration Court. The dispute shall be resolved on
            the basis of the laws of Estonia. The language of the Arbitration
            Court shall be Estonian. By joint decision of all parties of the
            dispute the language of the Arbitration Court may be changed to
            English. The Arbitration Court shall consist of 3 (three) members.
            Each Party shall appoint one arbitrator within the time period
            prescribed by the Council of the Arbitration Court of the Chamber of
            Commerce and Industry of Estonia. Each Party shall ask the
            arbitrator chosen by him to appoint a third arbitrator together with
            the arbitrator chosen by the other Party, who shall be the chairman
            of the Arbitration Court in the resolution of the dispute. If the
            arbitrators appointed by the Parties fail to choose a third
            arbitrator within the time period prescribed by the Council of the
            Arbitration Court of the Chamber of Commerce and Industry of
            Estonia, the third arbitrator who shall also be the chairman of the
            Arbitration Court shall be appointed by the Council of the
            Arbitration Court of the Chamber of Commerce and Industry. If the
            Parties fail to form the Arbitration Court in accordance with the
            provisions of the terms of this Contract and the Rules of the
            Arbitration Court, the Arbitration Court shall be formed by the
            Council of the Chamber of Commerce and Industry of Estonia. The
            decision of the Arbitration Court shall be final and binding upon
            the Parties.
          </ProgramParagraph>
        </Root>
      </PageLayout>
    </div>
  );
}

export default TermsAndConditions;

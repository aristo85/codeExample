import BoxSingleSelection from '@/modules/core/components/BoxSingleSelection';
import PriceComponent from '@/modules/core/components/PriceComponent';
import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {MouseEvent, useState} from 'react';
import {ImageInput} from '@/modules/core/components/ImageInput';
import {Color, Shape} from '@/modules/core/components/ImageInput/types';
import Camera from '@/modules/core/components/icons/Camera';
import BookingListItem, {
  BookedItemProps,
} from '@/modules/core/components/BookingListItem';
import {
  bookingListTest,
  boxes,
  prices,
  scheduleDataWithNestedArrays,
  uisImages,
} from '@/public/data/uisTestData';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import styled, {css} from 'styled-components';
import BusinessCard from '@/modules/core/components/BusinessCard';
import Pagination from '@/modules/core/components/Pagination';
import BookingImageMap, {
  Location,
} from '@/modules/placement/components/BookingImagesMap';
import Calendar from '@/modules/core/components/Calendar';
import TimeTableController, {
  ScheduleFormValues,
} from '@/modules/core/components/TimeTableController';
import {FormProvider, useForm} from 'react-hook-form';
import {HeaderWithSteps} from '@/modules/core/components/HeaderWithSteps';
import {ImageUpload} from '@/modules/core/components/ImageUpload';
import SuccessComponent from '@/modules/core/components/PaymentSuccessComponent';
import PhotoGallery from '@/modules/core/components/PhotoGallery';

export const UISWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BookingListItemContainer = styled.div`
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: purple;
  margin: 10px 0;
`;
export const PaginationWraper = styled.div`
  width: 1000px;
  ${({theme}) => css`
    ${theme.media.down('md')`
       display: none;
    `}
  `};
`;

const UIs = () => {
  const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
  const [isModalGalleryOption, setIsModalGalleryOption] = useState(false);
  const [selected, setSelected] = useState('1');
  const [isTourist, setIsTourist] = useState(true);
  const [date, setDate] = useState<Date | undefined>();
  const [imageList, setImageList] = useState('7');

  // TimeTable start
  const methods = useForm<ScheduleFormValues>({
    defaultValues: {
      schedule: scheduleDataWithNestedArrays, // Pass the nested array of objects as defaultValues
    },
  });

  const {handleSubmit, control, register} = methods;

  const onSubmit = (data: ScheduleFormValues) => {
    console.log(JSON.stringify(data));
  };
  // TimeTable ends
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSelected = (id: string) => {
    setSelected(id);
  };

  return (
    <UISWrapper>
      <select
        name="choices"
        id="choiceSelect"
        style={{width: '100px'}}
        value={imageList}
        onChange={e => setImageList(e.target.value)}>
        {['1', '2', '3', '4', '5', '6', '7'].map(el => (
          <option key={el} value={el}>
            {el} images
          </option>
        ))}
      </select>
      <div>
        <PhotoGallery
          images={uisImages.slice(0, +imageList)}
          isModalOpened={isModalGalleryOpen}
          setIsModalOpened={setIsModalGalleryOpen}
        />
      </div>

      <Divider />
      <div>
        <PhotoGallery
          images={uisImages.slice(0, +imageList)}
          isModalOpened={isModalGalleryOption}
          setIsModalOpened={setIsModalGalleryOption}
          isOptionsType
        />
      </div>

      <Divider />

      <BusinessCard
        photo="https://www.qatl.ru/upload/images/reviews/review_dormasheva.png"
        names="Фамилия Имя"
        age={35}
        jobTitle="Гид"
        phone="79999999999"
      />

      <Divider />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TimeTableController {...{control, register}} />
          <br />
          <button type="submit">Test Submit</button>
        </form>
      </FormProvider>

      <Divider />

      <BookingListItemContainer>
        <ButtonBasic onClick={() => setIsTourist(prev => !prev)}>
          {!isTourist ? 'Турист' : 'Партнер'}
        </ButtonBasic>
        {bookingListTest.map((el: BookedItemProps) => (
          <BookingListItem
            key={el.id}
            {...el}
            title={el.name}
            names={`${el.guest.firstName} ${el.guest.lastName}`}
            linkToDetailPage={
              isTourist
                ? `/profile/booking/placement/${el.id}`
                : `/control-panel/booking/placement/${el.id}`
            }
            isTourist={isTourist}
            onCancelClick={(id: number) => {
              console.log('cancel', id);
            }}
          />
        ))}
      </BookingListItemContainer>

      <Divider />

      <BoxSingleSelection
        options={boxes}
        selected={selected}
        onChange={handleSelected}
      />

      <Divider />

      <InputStyled
        name="test"
        label="Cтоимость за одно групповое занятие, ₽ "
        placeholder="Укажите стоимость группового занятия"
        completeDisable
      />

      <Divider />

      <ImageInput
        imageText={'Добавить свое фото'}
        handleImageRemove={(event: MouseEvent<HTMLButtonElement>, id: string) =>
          console.log('err', id)
        }
        handleImageUpload={data => console.log('Selected files:', data)}
        imageList={[]}
        shape={Shape.CIRCLE}
        color={Color.WHITE}
        icon={<Camera fill={'#1D7ABD'} />}
      />

      <Divider />

      <ImageInput
        imageText={'Добавить свое фото'}
        handleImageRemove={(event: MouseEvent<HTMLButtonElement>, id: string) =>
          console.log('err', id)
        }
        handleImageUpload={data => console.log('Selected files:', data)}
        imageList={[]}
        shape={Shape.RECTANGLE}
        color={Color.WHITE}
        icon={<Camera fill={'#1D7ABD'} />}
        disabledIcon={<Camera fill={'rgba(34, 33, 33, 0.32)'} />}
        mainImage={true}
      />

      <Divider />

      <ImageInput
        imageText={'Добавить свое фото'}
        handleImageRemove={(event: MouseEvent<HTMLButtonElement>, id: string) =>
          console.log('err', id)
        }
        handleImageUpload={data => console.log('Selected files:', data)}
        imageList={[]}
        shape={Shape.RECTANGLE}
        color={Color.PRIMARY}
        icon={<Camera fill={'white'} />}
        multipleImages={true}
      />

      <Divider />

      <ImageUpload
        imageText={'Загрузить свое фото'}
        onImageUpload={data => console.log('Uploaded files:', data)}
        shape={Shape.RECTANGLE}
        color={Color.PRIMARY}
        icon={<Camera fill={'white'} />}
        multipleImages={true}
        imageList={[]}
      />

      <Divider />

      <div
        style={{
          width: '330px',
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
        }}>
        <PriceComponent
          upSection={prices.upSection}
          downSection={prices.downSection}
        />
        <PriceComponent upSection={prices.upSection} />
      </div>

      <Divider />

      <HeaderWithSteps
        title={'Сулакский каньон'}
        subTitle={'Выберите дату и время экскурсии'}
        currentStep={1}
        stepsAmount={2}
      />

      <Divider />

      <Calendar
        maxNumberOfParticipants={5}
        numOfMonths={2}
        schedule={[
          {
            date: '2023-08-14',
            numberOfFreeCount: 34,
            timeList: [{time: '10:00'}],
          },
          {
            date: '2023-07-10',
            numberOfFreeCount: 34,
            timeList: [
              {time: '10:00'},
              {time: '12:00'},
              {time: '14:00'},
              {time: '16:00'},
            ],
          },
          {
            date: '2023-08-01',
            numberOfFreeCount: 34,
            timeList: [
              {time: '6:00'},
              {time: '7:00'},
              {time: '8:00'},
              {time: '9:00'},
              {time: '10:00'},
              {time: '11:00'},
              {time: '12:00'},
              {time: '13:00'},
              {time: '14:00'},
              {time: '15:00'},
              {time: '16:00'},
              {time: '17:00'},
            ],
          },
        ]}
        value={date}
        onChange={date => setDate(date)}
      />

      <Divider />

      <div>
        <BookingImageMap location={Location.PLACEMENT} images={uisImages} />
      </div>

      <Divider />

      <PaginationWraper>
        <Pagination
          isRewindButtonsShown={true}
          leftSideButtons={1}
          rightSideButtons={1}
          visiblePages={4}
          currentPage={currentPage}
          totalPages={10}
          onPageChange={page => setCurrentPage(page)}
        />
        <Pagination
          isRewindButtonsShown={false}
          leftSideButtons={1}
          rightSideButtons={1}
          visiblePages={4}
          currentPage={currentPage}
          totalPages={10}
          onPageChange={page => setCurrentPage(page)}
        />
      </PaginationWraper>

      <SuccessComponent
        paymentTitle={'Обработка платежа'}
        paymentSubTitle={
          'Отслеживайте статус бронирования на странице бронирования.'
        }
        buttonInfo={{
          href: () => '/',
          title: 'На главную',
        }}
      />

      <Divider />
    </UISWrapper>
  );
};

export default UIs;

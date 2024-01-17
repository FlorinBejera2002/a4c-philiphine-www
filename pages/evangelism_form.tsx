import styled from '@emotion/styled'
import { LoadingButton } from '@mui/lab'
import { TextField, Alert, AlertColor, Snackbar, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import { Header } from '../components/Header'

import { EvangelismRequest, EvangelismCategory, Status, createER } from './api/cms-api'

export const validateEmail = (email: string): boolean =>
  !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )

export const validateMobile = (mobile: string): boolean => String(mobile).length >= 10

interface Props {
  locale: string
}
export const getStaticProps = async (props: Props) => ({
  props: {
    ...(await serverSideTranslations(props.locale, ['common'])),
  },
})

const EvangelismForm: NextPage = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //snackbar
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false)
  const [snackBarMessage, setSnackBarMessage] = useState<string>(t('form.successful_submission'))
  const [snackBarType, setSnackBarType] = useState<AlertColor>('success')

  const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setShowSnackBar(false)
  }

  const areInputsValid = (er: EvangelismRequest): boolean => {
    if (er?.applicantEmail && !validateEmail(er?.applicantEmail)) {
      setError(t('form.invalid_email'))

      return false
    }

    if (er?.applicantMobile && !validateMobile(er?.applicantMobile)) {
      setError(t('form.invalid_mobile'))

      return false
    }

    if (er?.email && !validateEmail(er?.email)) {
      setError(t('form.invalid_email'))

      return false
    }

    if (er?.mobile && !validateMobile(er?.mobile)) {
      setError(t('form.invalid_mobile'))

      return false
    }

    return true
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setError('')
      const target = event.target as HTMLFormElement
      const elements = target.elements

      const applicantName = (elements.namedItem('applicantName') as HTMLInputElement).value
      const applicantEmail = (elements.namedItem('applicantEmail') as HTMLInputElement).value
      const applicantMobile = (elements.namedItem('applicantMobile') as HTMLInputElement).value
      const details = (elements.namedItem('details') as HTMLInputElement).value

      const er: EvangelismRequest = {
        applicantName,
        applicantEmail,
        applicantMobile,
        otherdetails: details,
        category: EvangelismCategory.EvangelismRequest,
        status: Status.InProgress,
      }

      if (!areInputsValid(er)) return
      setLoading(true)
      const response = await createER(er)

      if (!response.ok) {
        console.error('Response:', response)
        throw Error('Response not ok.')
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
      setSnackBarMessage(t('form.failed_submission'))
      setSnackBarType('error')
    }
    setShowSnackBar(true)
    setLoading(false)
  }

  return (
    <div>
      <Header />

      <Container>
        <SectionTag>{t('form.title')}</SectionTag>
        <Title>
          <Trans components={{ br: <br /> }} i18nKey="form.subtitle" />
        </Title>

        <form onSubmit={handleSubmit}>
          <Heading variant="h6">{t('form.applicant_person')}</Heading>
          <Content>
            <Left>
              <TextField
                color="error"
                id="applicantName"
                label={t('form.name')}
                required
                size="small"
                type="text"
                variant="outlined"
              />

              <TextField
                color="error"
                id="applicantEmail"
                label={t('form.email')}
                required
                size="small"
                type="text"
                variant="outlined"
              />
            </Left>
            <Right>
              <TextField
                color="error"
                id="applicantMobile"
                label={t('form.mobile')}
                size="small"
                type="text"
                variant="outlined"
              />
            </Right>
          </Content>

          <Content>
            <Right>
              <TextField
                color="error"
                id="details"
                label={t('form.details')}
                multiline
                rows={4}
                size="small"
                type="text"
                variant="outlined"
              />
            </Right>
          </Content>

          {error && <ErrorLabel color="error">{error}</ErrorLabel>}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
            <LoadingButton
              color="secondary"
              loading={loading}
              loadingPosition="end"
              sx={{ padding: '0.5rem 3rem' }}
              type="submit"
              variant="outlined"
            >
              {t('form.send', 'send')}
            </LoadingButton>
          </div>
        </form>

        <Snackbar autoHideDuration={6000} onClose={handleCloseSnackBar} open={showSnackBar}>
          <Alert onClose={handleCloseSnackBar} severity={snackBarType} sx={{ width: '100%' }}>
            {snackBarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  )
}

export default EvangelismForm

const Container = styled.div`
  background-color: #edf2f4;
  height: 100%;
  padding: 5rem 12rem;

  @media (max-width: 760px) {
    padding: 4rem 2rem;
  }
`

const Content = styled.div`
  display: flex;

  @media (max-width: 760px) {
    display: block;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0rem 0.2rem;

  > div {
    margin-bottom: 0.5rem;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0rem 0.2rem;

  > div {
    margin-bottom: 0.5rem;
  }
`

const Title = styled.div`
  padding-bottom: 1.5rem;
  font-size: 1rem;
`

const ErrorLabel = styled(Typography)`
  padding-top: 1rem;
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Heading = styled(Typography)`
  margin-bottom: 10px;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`

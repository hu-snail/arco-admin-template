import { useContext } from 'react';
import {
  Typography,
  Radio,
  Message,
  Pagination,
  DatePicker,
  Popconfirm,
  Button,
  Modal,
  TimePicker
} from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import { GlobalContext } from '@/context';

const { Title, Paragraph } = Typography;
const RadioGroup = Radio.Group;

export default function LocaleCompontent() {
  const { setLang, lang } = useContext(GlobalContext);

  const t = useLocale();
  const handlerChangeLang = (val) => {
    setLang(val);
    const langVal = val === 'zh-CN' ? '简体中文' : 'English';
    Message.success(`已切换为${langVal}`);
  };

  return (
    <div className="app-main-container">
      <RadioGroup
        type="button"
        name="lang"
        defaultValue={lang}
        style={{ marginRight: 20, marginBottom: 20 }}
        onChange={handlerChangeLang}
      >
        <Radio value="zh-CN">简体中文</Radio>
        <Radio value="en-US">English</Radio>
      </RadioGroup>
      <Typography>
        <Title>{t.locale.title}</Title>
        <Paragraph>{t.locale.paragraph1}</Paragraph>
        <Paragraph>{t.locale.paragraph2}</Paragraph>
        <Title heading={2}>{t.locale.sub_title}</Title>
        <Paragraph>{t.locale.sub_paragraph}</Paragraph>
      </Typography>
      <Typography>
        <Title>{t.locale.title}</Title>
      </Typography>
      <Pagination
        total={200}
        showTotal
        sizeCanChange
        style={{
          marginBottom: 20,
          marginRight: 40,
          minWidth: 550
        }}
      />
      <DatePicker.RangePicker style={{ marginBottom: 20, marginRight: 40, width: 300 }} />
      <TimePicker.RangePicker style={{ marginBottom: 20, marginRight: 40, width: 300 }} />
      <Popconfirm title="Click to confirm!">
        <Button style={{ marginBottom: 20, marginRight: 20 }} type="primary">
          Popconfirm
        </Button>
      </Popconfirm>
      <Button onClick={() => Modal.confirm({ title: 'Title', content: 'Content' })}>
        Modal confirm
      </Button>
    </div>
  );
}

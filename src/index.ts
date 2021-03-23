import SunEditor,{buttonList} from "suneditor-react";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import DataTable from "react-data-table-component";
import memoize from "memoize-one";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorIcon from '@material-ui/icons/Error';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete'

export {
  InputGroup,
  FormGroup,
  FormControl,
  FormCheck,
  Button,
  Form,
  Container,
  Col,
  Row,
  FormLabel,
  FormText,
  ToggleButton,
  ToggleButtonGroup,
  Table,
  Modal,
  Jumbotron,
  Alert,
} from "react-bootstrap";
import MuiTextField from "@material-ui/core/TextField";
import MaterialTable from "material-table";
export {MTableToolbar} from "material-table";
export {
  Box,
  AppBar,
  Typography,
  Grid,
  Toolbar,
  Tabs,
  Tab,
  Button as Btnx,
  Icon,
  IconButton,
  Checkbox,
  CardContent,
  InputBase,
  Paper,
  CircularProgress,
  CardHeader,
  CardActions,
  Accordion,
  AccordionDetails,
  FormLabel as LabelForm,
  FormControl as ControlForm,
  Radio,
  RadioGroup,
  FormControlLabel,
  Snackbar,
  SnackbarContent,
  TextareaAutosize,
  Breadcrumbs,
  Chip,
  Link,
  TableBody,
  Table as MUTable,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField as MUTextField,
  SvgIconProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  FormHelperText,
  Grow,
  ClickAwayListener,
  ButtonGroup,
  Popper,
  MenuList,
  MenuItem,
  Avatar,
  MuiThemeProvider,
  Modal as MUModal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
export { MuiCard, MuiAccordionSummary };
export {
  makeStyles,
  withStyles,
  createMuiTheme,
  emphasize,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
export {
  Add,
  Person,
  Code,
  People,
  CheckBox,
  SystemUpdateAlt,
  AddBox,
  Check,
  ChevronLeft,
  ChevronRight,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  ViewColumn,
  Delete,
  ImportExport,
  ArrowDownward,
  Clear,
  Search,
  ExpandMore,
  Home,
  Archive,
  Settings,
  HowToReg,
  List,
  ListAlt,
  AccountBox,
  DeveloperBoard,
  Build,
  SupervisorAccount,
  SettingsInputAntenna,
  ArrowDropDown,
  Launch,
} from "@material-ui/icons";

export { ThemeProvider } from "@material-ui/styles";
export { MuiPickersUtilsProvider } from "@material-ui/pickers";

export {
  Autocomplete,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";

export {
  Autocomplete as AC };
export { KeyboardDatePicker } from "formik-material-ui-pickers";
export { KeyboardDatePicker as MUDatePicker } from "@material-ui/pickers";
export {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
  RadioGroup as GroupRadio,
  CheckboxWithLabel,
} from "formik-material-ui";
import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";
export { MomentUtils };
export { DateFnsUtils };
export {
  PeoplePicker,
  PrincipalType,
} from "@pnp/spfx-controls-react/lib/PeoplePicker";
export { setup as pnpSetup } from "@pnp/common";
export { graph } from "@pnp/graph/presets/all";
export { Dispatcher } from "simplr-flux";
export { IAttachmentFileInfo } from "@pnp/sp/attachments";
export { PermissionKind } from "@pnp/sp/security";
export { AmetekLibraryLibrary } from "./libraries/ametekLibrary/AmetekLibraryLibrary";
export { Typeahead } from "react-bootstrap-typeahead";
export { Formik, Field } from "formik";
export { Form as FormikForm } from "formik";
export { DropzoneComponent } from "react-dropzone-component";
export { Yup };
export { DataTable };
export { memoize };
export { Spinner };
export default SunEditor
export { Alert as LabAlert };
export {MuiAlert}
export {AlertProps}
export { AlertTitle };
export { MuiTextField };
export { AddIcon };
export { DeleteIcon };
export { MaterialTable };
export { buttonList }
export { DropzoneArea } from "material-ui-dropzone";
export {CloseIcon}
export {CheckCircleOutlinedIcon}
export {ErrorIcon}
export {amber, green} from "@material-ui/core/colors"
export {clsx as myClsx}
export {PropTypes}
export { ThumbUpAltRoundedIcon }
export { ThumbDownAltRoundedIcon }
export { CheckBoxOutlineBlankIcon }
export { CheckBoxIcon }
